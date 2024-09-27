import { Card, CardContent, Typography, Box, CardMedia } from "@mui/material";
import { FC } from "react";
import { WeatherData } from "../../entities/weather";

interface CurrentWeatherProps {
  weatherData: WeatherData;
}

export const CurrentWeather: FC<CurrentWeatherProps> = ({ weatherData }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;

  return (
    <Card>
      <CardContent>
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          alignItems="center"
        >
          <Box flexGrow={1} marginRight={{ sm: 2 }}>
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
            <Typography variant="body1">
              Presión: {weatherData.main.pressure} hPa
            </Typography>
            <Typography variant="body1">
              Humedad: {weatherData.main.humidity}%
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            marginTop={{ xs: 2, sm: 0 }}
          >
            <CardMedia
              component="img"
              image={iconUrl}
              alt={weatherData.weather[0].description}
              style={{ height: "170px", width: "170px", objectFit: "contain" }}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
