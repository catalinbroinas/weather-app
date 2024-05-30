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

    // Constructs the API request URL to fetch the current day's weather data from WeatherAPI
    const buildUrl = () => {
        const url = getWeatherUrl();
        const key = getWeatherKey();
        const location = getWeatherLocation();
        return `${url}/forecast.json?key=${key}&q=${location}`;
    };

    /**
     * Fetches weather data from the API.
     *
     * @returns {Promise<Object>} A promise resolving to the API response in JSON format.
     * @throws {Error} If the response status is not OK or if fetch fails.
    */
    const getResponse = async () => {
        try {
            // Makes an HTTP request to the URL constructed by buildUrl()
            const response = await fetch(buildUrl(), {
                mode: 'cors'
            });

            // Checks if the HTTP response is not in the range 200-299
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Converts the response to JSON format and returns it
            return await response.json();
        } catch (err) {
            // Displays an error in the console and throws the error for further handling
            console.error('Error fetching weather data:', err);
            throw err;
        }
    };

    // Returns an object with geographic data about the location provided to the WeatherAPI
    const getLocation = async () => {
        try {
            // Waits for the promise returned by getResponse() to resolve and assigns the result to response
            const response = await getResponse();

            return {
                country: response.location.country,
                region: response.location.region,
                city: response.location.name,
            };
        } catch (err) {
            console.error('Error fetching location data:', err);
            throw err;
        };
    };

    // Return an object with current weather date from API
    const getCurrentWeatherConditions = async () => {
        try {
            // Waits for the promise returned by getResponse() to resolve and assigns the result to response
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

    // Returns an object with weather data about the current day from the API
    const getForecastWeatherCondition = async () => {
        try {
            // Waits for the promise returned by getResponse() to resolve and assigns the result to response
            const response = await getResponse();

            return {
                maxTempC: response.forecast.forecastday[0].day.maxtemp_c,
                maxTempF: response.forecast.forecastday[0].day.maxtemp_f,
                minTempC: response.forecast.forecastday[0].day.mintemp_c,
                minTempF: response.forecast.forecastday[0].day.mintemp_f,
                chanceOfRain: response.forecast.forecastday[0].day.daily_chance_of_rain
            };
        } catch (err) {
            console.error('Error fetching weather forecast data:', err);
            throw err;
        }
    };

    return {
        getWeatherLocation,
        setWeatherLocation,
        getResponse,
        getLocation,
        getCurrentWeatherConditions,
        getForecastWeatherCondition
    };
}

export { WeatherAPI };