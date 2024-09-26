import { FC, useState } from "react";
import { TextField, Autocomplete, Box } from "@mui/material";
import { useCitySuggestions } from "../../api/useCitySuggestions";
import { City } from "../../entities/city";

interface CitySearchProps {
  onCitySelect: (value: City | null) => void;
}

export const CitySearch: FC<CitySearchProps> = ({ onCitySelect }) => {
  const [city, setCity] = useState<string>("");

  const { suggestions, isLoading, error } = useCitySuggestions(city);

  return (
    <Box display="flex" alignItems="center">
      <Autocomplete
        fullWidth
        options={suggestions}
        getOptionLabel={(option: City) =>
          `${option.name}${option.state ? `, ${option.state}` : ""}, ${
            option.country
          }`
        }
        onInputChange={(_, value) => setCity(value)}
        onChange={(_, value) => onCitySelect(value)}
        loading={isLoading}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Buscar ciudad"
            variant="outlined"
            error={error}
            helperText={error && "No hay resultados para la búsqueda"}
          />
        )}
      />
    </Box>
  );
};
