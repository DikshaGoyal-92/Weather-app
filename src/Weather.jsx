import { useState } from "react";
import axios from "axios";
import Search from "./Search";
import WeatherCard from "./WeatherCard";

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_WEATHER_KEY;

  const fetchWeather = async (city) => {
    try {
      setError("");

      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      setWeather(res.data);
    } catch (err) {
      setError("City not found or API error");
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1>🌦️ Weather App</h1>

        <Search onSearch={fetchWeather} />

        {error && <p className="error">{error}</p>}

        {weather && <WeatherCard data={weather} />}
      </div>
    </div>
  );
}