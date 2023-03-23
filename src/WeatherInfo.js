import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="text-capitalize float-left">{props.weather.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.weather.date} />
        </li>
        <li className="text-capitalize">{props.weather.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6" id="current-left">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.weather.icon} />
            </div>
            <div className="float-left">
              <WeatherTemperature celsius={props.weather.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6" id="current-right">
          <ul>
            <li>Humidity: {props.weather.humidity}%</li>
            <li>Wind: {props.weather.wind}km/h</li>
          </ul>
        </div>
      </div>
      ;
    </div>
  );
}
