import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { WeatherDashboard } from "./components/weather-dashboard";
import { useTheme } from "./context/ThemeContext";

const App = () => {
  const { darkMode } = useTheme();
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#121212" : "#f0f0f0",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WeatherDashboard />
    </ThemeProvider>
  );
};

export default App;
