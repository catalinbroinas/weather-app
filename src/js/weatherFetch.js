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
        return `${url}/current.json?key=${key}&q=${location}`;
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
                city: response.location.name
            };
        } catch (err) {
            console.error('Error fetching country data:', err);
            throw err;
        };
    };

    return {
        getWeatherLocation,
        setWeatherLocation,
        getResponse,
        getLocation
    };
}

export { WeatherAPI };