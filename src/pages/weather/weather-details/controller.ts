import {useEffect, useState} from "react";
import {Location} from "../controller";
import {Weather} from "../../../models/weather";
import {fetchWeather} from "../service";

export type WeatherDetailsProps = {
    location: Location
}

export function useWeatherDetailsController(props: WeatherDetailsProps) {
    const [weather, setWeather] = useState(null as unknown as Weather);
    const [isFetchWeatherLoading, setFetchWeatherLoading] = useState(false);

    function fetchWeatherDetails() {
        setFetchWeatherLoading(true);
        fetchWeather({
            lat: props.location.lat,
            lon: props.location.lon
        }).then(weather => {
            setFetchWeatherLoading(false)
            setWeather(weather)
        })
    }

    useEffect(() => {
        fetchWeatherDetails();
    }, [props.location])

    return ({
        weather,
        getWeatherInfo: () => {
            if (weather) {
                return weather.weather[0];
            }
        },
        isWeatherInfoLoading: () => isFetchWeatherLoading,
        isWeatherInfoError: () => false,
    })
}
