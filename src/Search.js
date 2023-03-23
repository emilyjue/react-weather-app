import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Search() {
  let [search, setSearch] = useState("");
  const [weather, setWeather] = useState({ ready: false });

  //let fDay = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];

  let unitForm = (
    <form id="temp-form" className="temp">
      <fieldset>
        <div>
          <input
            type="radio"
            id="UnitChoice1"
            name="unit"
            value="fahrenheit"
            checked
          />
          <label for="contactChoice1">Fahrenheit </label>

          <input type="radio" id="UnitChoice2" name="unit" value="celsius" />
          <label for="contactChoice2"> Celsius</label>
        </div>
      </fieldset>
    </form>
  );

  let searchForm = (
    <form onSubmit={handleSubmit} className="search-form">
      <input type="search" placeholder="Search city" onChange={updateSearch} />
      <input type="submit" value="Search" />
    </form>
  );

  //let forecastHTML = `<div class="row border">`;

  function handleSubmit(event) {
    event.preventDefault();
    if (search.length <= 0) {
      alert("Please enter city");
    } else {
      let city = search.charAt(0).toUpperCase() + search.slice(1);
      setSearch(city);
      let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
      let units = "metric";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

      axios.get(apiUrl).then(showTemperature);
    }
  }
  function showTemperature(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
  }
  function updateSearch(event) {
    setSearch(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="Search">
        {searchForm}
        {unitForm}
        <WeatherInfo weather={weather} />
      </div>
    );
  } else {
    return (
      <div className="Search">
        {searchForm}
        {unitForm}
      </div>
    );
  }
}
