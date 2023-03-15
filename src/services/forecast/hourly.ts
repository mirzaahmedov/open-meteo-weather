import axios from "@/lib/axios/meteo"

type HourlyForecastParams = {
  time: number,
  latitude: number,
  longitude: number
}

type HourlyWeatherVariables = 
  "temperature_2m" | 
  "weathercode" | 
  "visibility" | 
  "relativehumidity_2m" | 
  "windspeed_10m"

type HourlyWeatherValues = {
  [key in HourlyWeatherVariables]: number[]
}
type HourlyWeatherUnits = {
  [key in HourlyWeatherVariables]: string
}

type HourlyWeatherResponse = {
  hourly: HourlyWeatherValues & {
    time: string[];
  };
  hourly_units: HourlyWeatherUnits & {
    time: string;
  };
  latitude: string;
  longitude: string;
  elevation: number;
};

type HourlyWeatherRequest ={
  latitude: number;
  longitude: number;
  start_date: string;
  end_date: string;
  timezone: string;
  hourly: string
};

const pad = (num: number) => num.toString().padStart(2, "0")

export const queryHourlyForecast = async ({ time, latitude, longitude }: HourlyForecastParams) => {
  const date = new Date(time)
  const start_date = `${pad(date.getFullYear())}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`

  date.setDate(date.getDate() + 7)
  const end_date = `${pad(date.getFullYear())}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`

  const { data } = await axios.get<HourlyWeatherResponse>("forecast", {
    params: {
      latitude,
      longitude,
      start_date,
      end_date,
      timezone: "auto",
      hourly: "temperature_2m,weathercode,visibility,windspeed_10m,relativehumidity_2m",
    } satisfies HourlyWeatherRequest,
  });
  return data;
}
