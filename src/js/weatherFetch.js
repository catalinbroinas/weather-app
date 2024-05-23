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

    const getLocation = () => request.location;

    const setLocation = (value) => {
        request.location = value;
    };

    const buildUrl = () => {
        const url = getWeatherUrl();
        const key = getWeatherKey();
        const location = getLocation();
        return `${url}/current.json?key=${key}&q=${location}`;
    };

    return {
        getLocation,
        setLocation
    };
}

export { WeatherAPI };