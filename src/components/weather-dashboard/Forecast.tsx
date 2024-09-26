import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { calculateForecastDays } from "../../helpers/calculateForecast";
import { FC } from "react";
import { ForecastData, ForecastDay } from "../../entities/forecast";

interface ForecastProps {
  forecastData: ForecastData;
}

export const Forecast: FC<ForecastProps> = ({ forecastData }) => {
  const forecastDays: ForecastDay[] = calculateForecastDays(forecastData.list);

  return (
    <Grid container spacing={2} mt={2}>
      {forecastDays.map((day: ForecastDay, index: number) => {
        const iconUrl = `https://openweathermap.org/img/wn/${day.weather.icon}@2x.png`;

        return (
          <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
            <Card>
              <CardContent>
                <Typography variant="body1">
                  {new Date(day.date).toLocaleDateString("es-ES", {
                    weekday: "long",
                  })}
                </Typography>
                <Box display="flex" alignItems="center">
                  <Typography variant="body2" style={{ marginRight: "1rem" }}>
                    Max: {Math.round(day.temp_max)}°C | Min:
                    {Math.round(day.temp_min)}°C
                  </Typography>
                  <img src={iconUrl} alt={day.weather.description} />
                </Box>
                <Typography variant="body2">
                  {day.weather.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
