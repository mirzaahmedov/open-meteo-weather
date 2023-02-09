import api from "../axios";

type Params<T> = T & {
	latitude: string
	longitude: string
}

export const getDailyForecastQuery = async () => {
	const { data } = await api.get("forecast", {			
		params: {
			latitude: "41.32",
			longitude: "69.25",
			daily: "temperature_2m_min, temperature_2m_max"
		}
	})
	return data
}
