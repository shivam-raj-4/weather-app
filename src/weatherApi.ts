import axios from "axios";

const WEATHER_API_KEY = "c5318bf52067985e464929291971fc7b";

export async function getCoordinate(city: string) {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${WEATHER_API_KEY}`;
    const response = await axios.get(url);
    const coordinates = {
        lat: response.data[0].lat,
        lon: response.data[0].lon
    };
    return coordinates;
}

export async function getWeatherDetails(lat: number, lon: number) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
    const response = await axios.get(url);
    const weatherDetails = {
        name: response.data.name,
        country: response.data.sys.country,
        time: new Date(response.data.dt),
        temperature: response.data.main.temp,
        weather_icon: "http://openweathermap.org/img/w/" + response.data.weather[0].icon + ".png",
        weather_desc: response.data.weather[0].description,
        weather_main: response.data.weather[0].main,
        high: response.data.main.temp_max,
        low: response.data.main.temp_min,
        humidity: response.data.main.humidity,
        pressure: response.data.main.pressure,
        visibility: response.data.visibility / 1000,
        wind: response.data.wind.speed,
        wind_dir: response.data.wind.deg,
        sunrise: new Date(response.data.sys.sunrise),
        sunset: new Date(response.data.sys.sunset)
    }
    return weatherDetails;
}