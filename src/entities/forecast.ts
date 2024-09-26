export interface ForecastListItem {
  dt_txt: string;
  main: {
    temp_min: number;
    temp_max: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

export interface ForecastData {
  list: ForecastListItem[];
}

export interface ForecastDay {
  date: string;
  temp_max: number;
  temp_min: number;
  weather: {
    description: string;
    icon: string;
  };
}
