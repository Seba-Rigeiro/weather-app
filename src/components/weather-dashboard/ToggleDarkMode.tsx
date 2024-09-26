// src/components/weather-dashboard/ToggleDarkMode.tsx
import React from "react";
import { Switch, FormControlLabel } from "@mui/material";
import { useTheme } from "../../context/ThemeContext"; // Importar el hook del contexto

const ToggleDarkMode: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme(); // Obtener los valores del contexto

  return (
    <FormControlLabel
      control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
      label="Dark Mode"
    />
  );
};

export default ToggleDarkMode;
