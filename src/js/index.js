import '../css/style.css';
import { WeatherAPI } from './weatherFetch';

const weather = WeatherAPI();
weather.setLocation('Oradea');
weather.getResponse()
    .then(data => {
        console.log('Response:', data);
    }).catch(err => {
        console.error('Error:', err);
    });

weather.getCountry()
    .then(data => {
        console.log('Country ', data);
    }).catch(err => {
        console.error('Error:', err);
    });