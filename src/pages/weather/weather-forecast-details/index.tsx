import React, {FunctionComponent} from "react";
import "./index.scss";
import {useWeatherForecastController, WeatherForecastDetailsProps} from "./controller";
import ForecastColumn from "../forecast-column";
import {Spin} from "antd";

const WeatherForecastDetails: FunctionComponent<WeatherForecastDetailsProps> = (props: WeatherForecastDetailsProps) => {
    const controller = useWeatherForecastController(props);

    function renderForecastDetails() {
        if (controller.isWeatherForecastInfoLoading()) {
            return (<Spin className="spinner"/>)
        }
        if (controller.isWeatherForecastInfoError()) {
            return (<div> Some error occurred </div>)
        }
        return (
            <div className="columns">
                {
                    controller.weatherForecasts?.map((forecast, index) => (
                        <ForecastColumn key={index} weather={forecast}/>
                    ))
                }
            </div>
        )
    }

    return (
        <div className="WeatherForecastDetails">
            {renderForecastDetails()}
        </div>
    );
};

export default WeatherForecastDetails;
