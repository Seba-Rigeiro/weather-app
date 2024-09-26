import { ForecastDay, ForecastListItem } from "../entities/forecast";

export const calculateForecastDays = (
  forecastList: ForecastListItem[]
): ForecastDay[] => {
  const days = forecastList.reduce(
    (acc: Record<string, ForecastDay>, day: ForecastListItem) => {
      const date = new Date(day.dt_txt).toISOString().split("T")[0];

      if (!acc[date]) {
        acc[date] = {
          date,
          temp_max: day.main.temp_max,
          temp_min: day.main.temp_min,
          weather: day.weather[0],
        };
      } else {
        acc[date].temp_max = Math.max(acc[date].temp_max, day.main.temp_max);
        acc[date].temp_min = Math.min(acc[date].temp_min, day.main.temp_min);
      }

      return acc;
    },
    {} as Record<string, ForecastDay>
  );

  return Object.values(days).slice(0, 5);
};
