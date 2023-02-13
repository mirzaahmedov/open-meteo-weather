import api from "../axios";

type ResponseType<T> = T & {
  latitude: string;
  longitude: string;
  elevation: number;
};
type RequestParamsType<T> = T & {
  latitude: string;
  longitude: string;
  timezone: string;
};

export type DailyForecastResponse = ResponseType<{
  daily: {
    time: string[];
    temperature_2m_max: number[];
  };
  daily_units: {
    time: string;
    temperature_2m_max: string;
  };
}>;

export type DailyForecastRequestParams = RequestParamsType<{
  daily: string;
}>;

export const getDailyForecastQuery = async ({ location }: any) => {
  const { data } = await api.get<DailyForecastResponse>("forecast", {
    params: {
      latitude: location.latitude,
      longitude: location.longitude,
      daily: [
        "temperature_2m_max",
        "temperature_2m_min",
        "weathercode",
        "sunset",
        "sunrise",
        "shortwave_radiation_sum",
        "windspeed_10m_max",
      ].join(","),
      timezone: "auto",
    } satisfies DailyForecastRequestParams,
  });
  return data;
};

export type HourlyForecastResponse = ResponseType<{
  hourly: {
    temperature_2m: string[];
  };
  hourly_units: {
    temperature_2m: string;
  };
}>;
export type HourlyForecastRequestParams = RequestParamsType<{
  hourly: string;
}>;

export const getHourlyForecastQuery = async () => {
  const { data } = await api.get<HourlyForecastResponse>("forecast", {
    params: {
      latitude: "41.32",
      longitude: "69.25",
      hourly: [
        "temperature_2m",
        "weathercode",
        "visibility",
        "windspeed_10m",
        "relativehumidity_2m",
      ].join(","),
      timezone: "auto",
    } satisfies HourlyForecastRequestParams,
  });
  return data;
};
