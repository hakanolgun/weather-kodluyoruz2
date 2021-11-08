import { createContext, useState, useEffect } from "react";
import cities from "./cities";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [city, setCity] = useState(cities[33]);
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    async function getWeather() {
      const apiCall = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.long}&exclude=current,minutely,hourly,alerts&units=metric&appid=${apiKey}`
      );
      const res = await apiCall.json();
      console.log(`data`, res.daily);
      setWeatherData(res.daily);
    }
    getWeather();
  }, [city, apiKey]);

  const values = {
    cities,
    city,
    setCity,
    weatherData,
    setWeatherData
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;
