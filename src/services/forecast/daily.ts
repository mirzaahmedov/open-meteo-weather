import axios from "@/lib/axios/meteo"

type DailyForecastParams = {
  time: number,
  latitude: number,
  longitude: number
}

type DailyWeatherVariables = 
  "temperature_2m_max" | 
  "temperature_2m_min" | 
  "weathercode" | 
  "sunset" | 
  "sunrise" | 
  "shortwave_radiation_sum" | 
  "windspeed_10m_max"

type DailyWeatherValues = {
  [key in DailyWeatherVariables]: number[]
}
type DailyWeatherUnits = {
  [key in DailyWeatherVariables]: string
}

type DailyWeatherResponse = {
  daily: DailyWeatherValues & {
    time: number[];
    sunset: string[];
    sunrise: string[];
  };
  daily_units: DailyWeatherUnits & {
    time: number;
  };
  latitude: string;
  longitude: string;
  elevation: number;
};

type DailyWeatherRequest ={
  latitude: number;
  longitude: number;
  start_date: string;
  end_date: string;
  timezone: string;
  daily: string
};

const padding = (num: number) => num.toString().padStart(2, "0")

export const queryDailyForecast = async ({ time, latitude, longitude }: DailyForecastParams) => {
  const date = new Date(time)
  const start_date = `${padding(date.getFullYear())}-${padding(date.getMonth() + 1)}-${padding(date.getDate())}`

  date.setDate(date.getDate() + 7)
  const end_date = `${padding(date.getFullYear())}-${padding(date.getMonth() + 1)}-${padding(date.getDate())}`.padStart(2, "0")

  const { data } = await axios.get<DailyWeatherResponse>("forecast", {
    params: {
      latitude,
      longitude,
      start_date,
      end_date,
      timezone: "auto",
      daily: "temperature_2m_max,temperature_2m_min,weathercode,sunset,sunrise,shortwave_radiation_sum,windspeed_10m_max"
    } satisfies DailyWeatherRequest,
  });
  return data;
}
