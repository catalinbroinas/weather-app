function WeatherAPI() {
    const request = {
        url: 'https://api.weatherapi.com/v1',
        key: 'b643f30100b44bfb8e8122233241705',
        location: 'London'
    };

    const getWeatherUrl = () => request.url;

    const setWeatherUrl = (value) => {
        request.url = value;
    };

    const getWeatherKey = () => request.key;

    const setWeatherKey = (value) => {
        request.key = value;
    };

    const getWeatherLocation = () => request.location;

    const setWeatherLocation = (value) => {
        request.location = value;
    };

    const buildUrl = () => {
        const url = getWeatherUrl();
        const key = getWeatherKey();
        const location = getWeatherLocation();
        return `${url}/forecast.json?key=${key}&q=${location}`;
    };

    const getResponse = async () => {
        try {
            const response = await fetch(buildUrl(), {
                mode: 'cors'
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (err) {
            console.error('Error fetching weather data:', err);
            throw err;
        }
    };

    const getLocation = async () => {
        try {
            const response = await getResponse();
            return {
                country: response.location.country,
                region: response.location.region,
                city: response.location.name,
            };
        } catch (err) {
            console.error('Error fetching country data:', err);
            throw err;
        };
    };

    const getCurrentWeatherConditions = async () => {
        try {
            const response = await getResponse();
            return {
                degreeC: response.current.temp_c,
                degreeF: response.current.temp_f,
                humidity: response.current.humidity,
                pressureMb: response.current.pressure_mb,
                lastUpdate: response.current.last_updated,
                condition: response.current.condition.text,
                icon: response.current.condition.icon,
                feelsLikeC: response.current.feelslike_c,
                feelsLikeF: response.current.feelslike_f,
                windKph: response.current.wind_kph,
                precipMm: response.current.precip_mm,
                uvIndex: response.current.uv
            };
        } catch (err) {
            console.error('Error fetching weather condition data:', err);
            throw err;
        }
    };

    return {
        getWeatherLocation,
        setWeatherLocation,
        getResponse,
        getLocation,
        getCurrentWeatherConditions
    };
}

export { WeatherAPI };