import api from "../axios";

type TodaysWeatherResponse = {
  hourly: {
    temperature_2m: number[];
  };
};

export const getTodaysWeather = async (position: {
  x: number;
  y: number;
}): Promise<TodaysWeatherResponse> => {
  const { data } = await api.get("forecast", {
    params: {
      latitude: position.x,
      longitude: position.y,
      hourly: "temperature_2m",
    },
  });
  return data;
};
