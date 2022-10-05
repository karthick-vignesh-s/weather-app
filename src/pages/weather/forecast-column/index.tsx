import React, {FunctionComponent} from "react";
import "./index.scss";
import {Weather} from "../../../models/weather";

type ForecastColumnProps = {
    weather: Weather
}

const ForecastColumn: FunctionComponent<ForecastColumnProps> = (props: ForecastColumnProps) => {
    const {weather} = props;
    const forecastDate = new Date(weather.dt_txt);
    return (
        <div className="ForecastColumn">
            <div className="section">
                {forecastDate.toLocaleString("en", {weekday: "long"})}
                <div className="date">
                    {forecastDate.toLocaleDateString("en")}
                </div>
            </div>
            <div className="description">
                <div className={`wi wi-icon-${weather.weather[0].id}`} title={weather.weather[0].description}/>
                <div>{weather.weather[0].main}</div>
            </div>
            <div className="temperature">{weather.main.temp_max}&#8451;</div>
            <div className="temperature">{weather.main.temp_min}&#8451;</div>
        </div>
    );
};

export default ForecastColumn;
