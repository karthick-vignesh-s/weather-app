import React, {FunctionComponent} from "react";
import "./index.scss";
import {Container} from "react-bootstrap";
import DropdownMenu from "../../common/components/dropdown-menu";
import {useWeatherController} from "./controller";
import WeatherDetails from "./weather-details";
import WeatherForecastDetails from "./weather-forecast-details";

const Weather: FunctionComponent = () => {
    const controller = useWeatherController();

    return (
        <div className="Weather">
            <Container>
                <>
                    <DropdownMenu
                        dropdownItems={controller.dropdownItems}
                        ariaLabel="Location"
                        onClick={controller.handleDropdownValueChanged}
                    >
                        <div className="section">
                            {controller.selectedLocation?.nm.toUpperCase()}
                            <i className="ri-arrow-down-s-line icon-button"/>
                        </div>
                    </DropdownMenu>
                    <WeatherDetails location={controller.selectedLocation}/>
                    <WeatherForecastDetails location={controller.selectedLocation}/>
                </>
            </Container>
        </div>
    );
};

export default Weather;
