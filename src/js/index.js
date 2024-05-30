import '../css/style.css';
import { WeatherAPI } from './weatherFetch';
import { DomUtility, FormValidator } from './utility';

function DomHandler() {
    const domUtility = DomUtility();
    const submitButton = document.querySelector('#submit-btn');

    const addEvents = () => {
        submitButton.addEventListener('click', (event) => {
            domUtility.rippleEffect(event.target);
        });
    };

    return { addEvents };
}

window.addEventListener('load', () => {
    const formValidate = FormValidator('weather-form');
    const domHandler = DomHandler();
    formValidate.addEvents();
    domHandler.addEvents();
});

const weather = WeatherAPI();
weather.setWeatherLocation('Oradea');
weather.getResponse()
    .then(data => {
        console.log('Response:', data);
    }).catch(err => {
        console.error('Error:', err);
    });

weather.getLocation()
    .then(data => {
        console.log(`Country ${data.country}, region ${data.region} and city ${data.city}.`);
    }).catch(err => {
        console.error('Error:', err);
    });

weather.getCurrentWeatherConditions()
    .then(data => {
        console.log(`Degree C ${data.degreeC}, humidity ${data.humidity} and
        atmospheric pressure ${data.pressure}. Last update: ${data.lastUpdate}`);
    }).catch(err => {
        console.error('Error:', err);
    });

weather.getForecastWeatherCondition()
    .then(data => {
        console.log(`Max temperature is ${data.maxTempC} and min temperature is ${data.minTempC}.
         Today is ${data.chanceOfRain}% chance of rain.`);
    }).catch(err => {
        console.error('Error:', err);
    });