import useSWR from "swr";
import { City } from "../entities/city";
import { fetcher } from "../utils/fetcher";

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

export const useCitySuggestions = (query: string) => {
  const url = query
    ? `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=10&appid=${API_KEY}`
    : null;

  const { data, error, isLoading } = useSWR<City[]>(url, fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 60000,
  });

  return {
    suggestions: data || [],
    isLoading,
    error,
  };
};
