import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col" id="current-left">
          <h1 className="text-capitalize">{props.weather.city}</h1>
          <p>
            <FormattedDate date={props.weather.date} />
          </p>
          <h2 className="float-left">
            <WeatherIcon code={props.weather.icon} />
            {Math.round(props.weather.temperature)}°F
          </h2>
        </div>
        <div className="col" id="current-right">
          <ul>
            <li className="text-capitalize">{props.weather.description}</li>
            <li>Humidity: {props.weather.humidity}%</li>
            <li>Wind: {props.weather.wind}km/h</li>
          </ul>
        </div>
      </div>
      ;
    </div>
  );
}
