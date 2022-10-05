import React, {FunctionComponent} from "react";
import "./index.scss";
import {useWeatherDetailsController, WeatherDetailsProps} from "./controller";
import {Spin} from "antd";

const WeatherDetails: FunctionComponent<WeatherDetailsProps> = (props: WeatherDetailsProps) => {
    const controller = useWeatherDetailsController(props);

    const renderWeatherInformation = () => {
        if (controller.isWeatherInfoLoading()) {
            return (<Spin className="spinner"/>)
        }
        if (controller.isWeatherInfoError()) {
            return (<div> Some error occurred </div>)
        }

        if (controller.weather) {
            return (
                <>
                    <div className="temperature">{controller.weather.main.temp}&#8451;</div>
                    <div className="description">
                        <div className={`wi wi-icon-${controller.getWeatherInfo()?.id}`}
                             title={controller.getWeatherInfo()?.description}/>
                        <div>{controller.getWeatherInfo()?.main}</div>
                    </div>
                </>
            )
        }
        return null;
    }

    return (
        <div className="WeatherDetails">
            {renderWeatherInformation()}
        </div>
    );
};

export default WeatherDetails;
