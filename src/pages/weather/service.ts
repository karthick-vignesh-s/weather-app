import axios from "axios";
import {Weather} from "../../models/weather";
import {WeatherForecast} from "../../models/weather-forecast";

export type WeatherFilter = {
    lat: number
    lon: number
}

const axiosInstance = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
    timeout: 0,
})

export const fetchWeather = async (filters: WeatherFilter): Promise<Weather> => {
    const response = await axiosInstance({
        method: "get",
        url: "/weather",
        params: {
            lat: filters.lat,
            lon: filters.lon,
            units: "metric",
            APPID: process.env.REACT_APP_OPEN_WEATHER_API_KEY
        }
    });
    return response.data;
};

export const fetchWeatherForecast = async (filters: WeatherFilter): Promise<WeatherForecast> => {
    const response = await axiosInstance({
        method: "get",
        url: "/forecast",
        params: {
            lat: filters.lat,
            lon: filters.lon,
            units: "metric",
            cnt: 32,
            APPID: process.env.REACT_APP_OPEN_WEATHER_API_KEY
        }
    });
    return response.data;
};
