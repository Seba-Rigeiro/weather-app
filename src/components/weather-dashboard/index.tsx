import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import ToggleDarkMode from "./ToggleDarkMode";
import { useWeather } from "../../api/useWeather";
import { CurrentWeather } from "./CurrentWeather";
import { Forecast } from "./Forecast";
import { Loader } from "../common/Loader";
import { CitySearch } from "./CitySearch";
import styled from "@emotion/styled";
import { City } from "../../entities/city";
import { useTheme } from "../../context/ThemeContext";
import { EmptyState } from "../common/EmptyState";

const SectionContainer = styled(Box)<{ darkMode: boolean }>`
  margin: 24px;
  padding: 16px;
  background-color: ${({ darkMode }) => (darkMode ? "#333" : "#dfdfe2")};
`;

export const WeatherDashboard = () => {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  const { weatherData, forecastData, isLoading, error } =
    useWeather(selectedCity);
  const { darkMode } = useTheme();

  const handleCitySelect = (value: City | null) => {
    setSelectedCity(value);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container maxWidth="xl">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={2}
      >
        <Typography variant="h4">Weather Dashboard</Typography>
        <ToggleDarkMode />
      </Box>
      <SectionContainer darkMode={darkMode}>
        <CitySearch onCitySelect={handleCitySelect} />
      </SectionContainer>

      {((!weatherData && !forecastData) || error) && (
        <SectionContainer darkMode={darkMode}>
          <EmptyState
            title={error ? "Hubo un error" : "No hay datos"}
            description={
              error
                ? "Por favor, intenta nuevamente"
                : "Por favor, selecciona una ciudad"
            }
          />
        </SectionContainer>
      )}
      {weatherData && (
        <SectionContainer darkMode={darkMode}>
          <Typography variant="h5" mb={2}>
            <span style={{ fontWeight: "bold" }}>Pronóstico actual - </span>
            {weatherData.name}
          </Typography>
          <CurrentWeather weatherData={weatherData} />
        </SectionContainer>
      )}
      {forecastData && (
        <SectionContainer darkMode={darkMode}>
          <Typography variant="h5" mb={2}>
            <span style={{ fontWeight: "bold" }}>
              Pronóstico para 5 días -{" "}
            </span>
            {weatherData?.name}
          </Typography>
          <Forecast forecastData={forecastData} />
        </SectionContainer>
      )}
    </Container>
  );
};
