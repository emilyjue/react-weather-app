import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-3">
        <div className="col-6">
          <h1 className="text-capitalize">{props.weather.city}</h1>
          <ul>
            <li>
              <div className="d-flex">
                <FormattedDate date={props.weather.date} />,{" "}
                {props.weather.description}
              </div>
            </li>
            <li>
              Humidity: {props.weather.humidity}%, Wind: {props.weather.wind}
              km/h
            </li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-8">
          <div className="temperature-container d-flex justify-content-end">
            <WeatherIcon code={props.weather.icon} />
            <WeatherTemperature celsius={props.weather.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}
