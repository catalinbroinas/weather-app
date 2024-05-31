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
        updateElement.textContent = lastUpdate;
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

        temperatureElement.textContent = temp;
        maxTempElement.textContent = maxTemp;
        minTempElement.textContent = minTemp;
        feelsLikeElement.textContent = feelsLike;
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
        }
    };

    // DOM update with the data provided by the API
    const displayWeather = async () => {
        try {
            await displayLocation();
            await displayCurrentWeather();
            await displayDayWeather();
        } catch (err) {
            console.error('Error displaying weather data:', err);
        }
    };

    const addEvents = () => {
        submitButton.addEventListener('click', (event) => {
            domUtility.rippleEffect(event.target);
        });
    };

    return { addEvents, displayWeather };
}

window.addEventListener('load', () => {
    const formValidate = FormValidator('weather-form');
    const domHandler = DomHandler();
    formValidate.addEvents();
    domHandler.addEvents();
});

// const weather = WeatherAPI();
// weather.setWeatherLocation('Oradea');
// weather.getResponse()
//     .then(data => {
//         console.log('Response:', data);
//     }).catch(err => {
//         console.error('Error:', err);
//     });

// weather.getLocation()
//     .then(data => {
//         console.log(`Country ${data.country}, region ${data.region} and city ${data.city}.`);
//     }).catch(err => {
//         console.error('Error:', err);
//     });

// weather.getCurrentWeatherConditions()
//     .then(data => {
//         console.log(`Degree C ${data.degreeC}, humidity ${data.humidity} and
//         atmospheric pressure ${data.pressure}. Last update: ${data.lastUpdate}`);
//     }).catch(err => {
//         console.error('Error:', err);
//     });

// weather.getForecastWeatherCondition()
//     .then(data => {
//         console.log(`Max temperature is ${data.maxTempC} and min temperature is ${data.minTempC}.
//          Today is ${data.chanceOfRain}% chance of rain.`);
//     }).catch(err => {
//         console.error('Error:', err);
//     });