interface Weather {
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  pressure: number;
}

interface Sys {
  country: string;
}

export interface WeatherData {
  weather: Weather[];
  main: Main;
  name: string;
  sys: Sys;
}
