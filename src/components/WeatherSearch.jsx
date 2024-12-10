import { useState } from "react";
import { show } from "../services/weatherService";

const WeatherSearch = ({ setLocation, setTemp, getWeather }) => {
  const handleChange = (event) => {
    setLocation(event.target.value);
    setTemp("")
  };

  return (
    <div>
      <input name="location" onChange={handleChange} />
      <button onClick={getWeather}>Get Weather</button>
    </div>
  );
};

export default WeatherSearch;