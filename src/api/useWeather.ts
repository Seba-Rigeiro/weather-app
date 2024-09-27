import useSWR from "swr";
import { WeatherData } from "../entities/weather";
import { ForecastData } from "../entities/forecast";
import { fetcher } from "../utils/fetcher";
import { City } from "../entities/city";

interface UseWeatherReturn {
  weatherData: WeatherData | null;
  forecastData: ForecastData | null;
  isLoading: boolean;
  error: string | null;
}

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

export const useWeather = (selectedCity: City | null): UseWeatherReturn => {
  const { lat, lon } = selectedCity || {};

  const weatherUrl = selectedCity
    ? `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`
    : null;

  const forecastUrl = selectedCity
    ? `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`
    : null;

  const {
    data: weatherData,
    error: weatherError,
    isLoading: loadingWeather,
  } = useSWR<WeatherData>(weatherUrl, fetcher);

  const {
    data: forecastData,
    error: forecastError,
    isLoading: loadingForecast,
  } = useSWR<ForecastData>(forecastUrl, fetcher);

  return {
    weatherData: weatherData || null,
    forecastData: forecastData || null,
    isLoading: loadingWeather || loadingForecast,
    error: weatherError || forecastError,
  };
};
