import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [search, setSearch] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (search.length <= 0) {
      alert("Please enter city");
    } else {
      let city = search.charAt(0).toUpperCase() + search.slice(1);
      let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
      let units = "metric";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

      axios.get(apiUrl).then(showTemperature);
    }
  }
  function showTemperature(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }
  function updateSearch(event) {
    setSearch(event.target.value);
  }

  if (temperature) {
    return (
      <div className="Search">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Type a city"
            onChange={updateSearch}
          />
          <input type="submit" value="Search" />
        </form>
        <ul>
          <li>Temperature: {Math.round(temperature)}°C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind}km/h</li>
          <li>
            <img src={icon} alt="Weather icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="Search">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Type a city"
            onChange={updateSearch}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}
