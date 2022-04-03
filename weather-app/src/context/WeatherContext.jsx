import { createContext, useState } from "react";
import apikey from "../apikey";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState({
    temp: 0,
    name: "",
    description: "",
    loading: true,
    feels: "",
    country: "",
    icon: "",
  });

  const [loading, setLoading] = useState(false);

  const api = apikey;

  const getWeather = async (city) => {
    setLoading(true);
    const fetchAPI = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=tr`
    );
    const data = await fetchAPI.json();
    setWeather({
      temp: data.main.temp,
      name: data.name,
      description: data.weather[0].description,
      loading: false,
      feels: data.main.feels_like,
      country: data.sys.country,
      icon: data.weather[0].icon,
    });
    setLoading(false);
  };

  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const time = `${hours}:${minutes}:${seconds}`;
  const dateTime = `${day}/${month}/${year}`;

  return (
    <WeatherContext.Provider
      value={{ weather, getWeather, loading, time, dateTime }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
