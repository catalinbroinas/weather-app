import '../css/style.css';
import { WeatherAPI } from './weatherFetch';
import { FormValidator } from './utility';

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