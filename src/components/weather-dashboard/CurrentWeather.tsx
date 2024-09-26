import { Card, CardContent, Typography, Box, CardMedia } from "@mui/material";
import { FC } from "react";
import { WeatherData } from "../../entities/weather";

interface CurrentWeatherProps {
  weatherData: WeatherData;
}

export const CurrentWeather: FC<CurrentWeatherProps> = ({ weatherData }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

  return (
    <Card>
      <CardContent>
        <Box display="flex" alignItems="center">
          <Box flexGrow={1}>
            <Typography variant="h5">
              {weatherData.name}, {weatherData.sys.country}
            </Typography>
            <Typography variant="h6">
              {weatherData.weather[0].description}
            </Typography>
            <Typography variant="body1" marginTop={1}>
              Temperatura: {Math.round(weatherData.main.temp)}°C
            </Typography>
            <Typography variant="body1">
              Sensación Térmica: {Math.round(weatherData.main.feels_like)}°C
            </Typography>
          </Box>
          <Box height="150px" width="150px">
            <CardMedia
              component="img"
              image={iconUrl}
              alt={weatherData.weather[0].description}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
