import {useEffect, useState} from "react";
import {Location} from "../controller";
import {fetchWeatherForecast} from "../service";
import {Weather} from "../../../models/weather";

export type WeatherForecastDetailsProps = {
    location: Location
}

export function useWeatherForecastController(props: WeatherForecastDetailsProps) {
    const [isFetchWeatherForecastLoading, setFetchWeatherForecastLoading] = useState(false);
    const [weatherForecasts, setWeatherForecasts] = useState(null as unknown as Weather[]);

    useEffect(() => {
        fetchWeatherForecastDetails();
    }, [props.location])

    const fetchWeatherForecastDetails = () => {
        setFetchWeatherForecastLoading(true);
        fetchWeatherForecast({
            lat: props.location.lat,
            lon: props.location.lon
        }).then(forecasts => {
            let dayForecasts = [];
            for (let i = 8; i < forecasts.list.length; i += 8) {
                dayForecasts.push(forecasts.list[i])
            }
            setFetchWeatherForecastLoading(false)
            setWeatherForecasts(dayForecasts)
        })
    }

    return ({
        weatherForecasts,
        isWeatherForecastInfoLoading: () => isFetchWeatherForecastLoading,
        isWeatherForecastInfoError: () => false,
    })
}
