import '../css/style.css';
import { WeatherAPI } from './weatherFetch';
import { DomUtility, FormValidator } from './utility';

function DomHandler() {
    const weatherAPI = WeatherAPI();
    const domUtility = DomUtility();
    const submitButton = document.querySelector('#submit-btn');

    // Function to update location in the DOM
    const updateLocation = (location) => {
        const locationElement = document.querySelector('#location');
        locationElement.textContent = location;
    };

    // Function to update last update time in the DOM
    const updateLastUpdate = (lastUpdate) => {
        const updateElement = document.querySelector('#update');
        updateElement.textContent = `${domUtility.formatDate(lastUpdate)}`;
    };

    // Function to update weather icon in the DOM
    const updateIcon = (iconSrc) => {
        const iconElement = document.querySelector('#icon');
        iconElement.src = iconSrc;
    };

    // Function to update weather condition in the DOM
    const updateWeatherCondition = (weatherCondition) => {
        const weatherConditionElement = document.querySelector('#condition');
        weatherConditionElement.textContent = weatherCondition;
    };

    // Function to update temperature, max temp, min temp, and feels like temp in the DOM
    const updateTemperature = ({ temp, maxTemp, minTemp, feelsLike }) => {
        const temperatureElement = document.querySelector('#temperature');
        const maxTempElement = document.querySelector('#max-temperature');
        const minTempElement = document.querySelector('#min-temperature');
        const feelsLikeElement = document.querySelector('#feels-like');

        if (temp !== undefined) {
            temperatureElement.textContent = `${temp}`;
        }
        if (feelsLike !== undefined) {
            feelsLikeElement.textContent = `${feelsLike}`;
        }
        if (maxTemp !== undefined) {
            maxTempElement.textContent = `${maxTemp}`;
        }
        if (minTemp !== undefined) {
            minTempElement.textContent = `${minTemp}`;
        }
    };

    // Function to update humidity in the DOM
    const updateHumidity = (humidity) => {
        const HumidityElement = document.querySelector('#Humidity');
        HumidityElement.textContent = `${humidity}%`;
    };

    // Function to update precipitation in the DOM
    const updatePrecipitation = (precipitation) => {
        const precipitationElement = document.querySelector('#precipitation');
        precipitationElement.textContent = `${precipitation}mm`;
    };

    // Function to update chance of rain in the DOM
    const updateChanceOfRain = (chanceOfRain) => {
        const chanceOfRainElement = document.querySelector('#chance-of-rain');
        chanceOfRainElement.textContent = `${chanceOfRain}%`;
    };

    // Function to update wind speed in the DOM
    const updateWildSpeed = (wildSpeed) => {
        const wildSpeedElement = document.querySelector('#wild-speed');
        wildSpeedElement.textContent = `${wildSpeed}Km/h`;
    };

    // Function to update pressure in the DOM
    const updatePressure = (pressure) => {
        const pressureElement = document.querySelector('#pressure');
        pressureElement.textContent = `${pressure}mm`;
    };

    // Function to update UV index in the DOM
    const updateUvIndex = (uvIndex) => {
        const uvIndexElement = document.querySelector('#uv-index');
        uvIndexElement.textContent = uvIndex;
    };

    // Updates the DOM based on the location data received from the API
    const displayLocation = async () => {
        try {
            const locationData = await weatherAPI.getLocation();
            updateLocation(`${locationData.city}, ${locationData.country}`);
        } catch (err) {
            console.error('Error getting location data.', err);
            throw err;
        }
    };

    // Updates the DOM based on the current weather data received from the API
    const displayCurrentWeather = async () => {
        try {
            const currentWeatherData = await weatherAPI.getCurrentWeatherConditions();
            updateLastUpdate(currentWeatherData.lastUpdate);
            updateWeatherCondition(currentWeatherData.condition);
            updateIcon(currentWeatherData.icon);
            updateTemperature({
                temp: currentWeatherData.degreeC,
                feelsLike: currentWeatherData.feelsLikeC
            });
            updateHumidity(currentWeatherData.humidity);
            updatePressure(currentWeatherData.pressureMb);
            updatePrecipitation(currentWeatherData.precipMm);
            updateUvIndex(currentWeatherData.uvIndex);
            updateWildSpeed(currentWeatherData.windKph);
        } catch (err) {
            console.error('Error getting current weather data.', err);
            throw err;
        }
    };

    // Updates the DOM based on the day weather data received from the API
    const displayDayWeather = async () => {
        try {
            const forecastWeatherData = await weatherAPI.getForecastWeatherCondition();
            updateTemperature({
                maxTemp: forecastWeatherData.maxTempC,
                minTemp: forecastWeatherData.minTempC
            });
            updateChanceOfRain(forecastWeatherData.chanceOfRain);
        } catch (err) {
            console.error('Error getting forecast weather data.', err);
            throw err;
        }
    };

    // Display an alert if the location is not found it
    const displayAlert = () => {
        const form = document.querySelector('#weather-form');
        const alert = domUtility.createAlert({
            text: 'The location entered was not found.',
            mdiIcon: 'mdi-alert'
        });

        form.after(alert);
    };

    // Remove alert if the location is found it
    const removeAlert = () => {
        const alert = document.querySelector('#alert-weather');

        if (alert) {
            alert.remove();
        }
    };

    // DOM update with the data provided by the API
    const displayWeather = async () => {
        try {
            await displayLocation();
            await displayCurrentWeather();
            await displayDayWeather();
            removeAlert();
        } catch (err) {
            displayAlert();
            console.error('Error displaying weather data:', err);
        }
    };

    // Update weather data based on the location entered by the user
    const updateWeatherByLocation = () => {
        const input = document.querySelector(`#city`);
        weatherAPI.setWeatherLocation(input.value);
        displayWeather();
    };

    const submitButtonClickHandler = (event) => {
        const formValidate = FormValidator('weather-form');
        domUtility.rippleEffect(event.target);
        if (formValidate.checkValidate()) {
            updateWeatherByLocation();
        }
    };

    const addEvents = () => {
        submitButton.addEventListener('click', (event) => {
            submitButtonClickHandler(event);
        });
    };

    return { addEvents, displayWeather };
}

window.addEventListener('load', () => {
    const formValidate = FormValidator('weather-form');
    const domHandler = DomHandler();
    domHandler.displayWeather();
    formValidate.addEvents();
    domHandler.addEvents();
});