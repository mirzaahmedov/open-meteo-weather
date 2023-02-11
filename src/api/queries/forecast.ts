import api from "../axios";

type ResponseType<T> = T & {
	latitude: string
	longitude: string
	elevation: number
}
type RequestParamsType<T> = T & {
	latitude: string,
	longitude: string,
	timezone: string
}

export type DailyForecastResponse = ResponseType<{
	daily: {
		time: string[]
		temperature_2m_max: number[]
	},
	daily_units: {
		time: string,
		temperature_2m_max: string,
	}
}>

export type DailyForecastRequestParams = RequestParamsType<{
	daily: string
}>

export const getDailyForecastQuery = async () => {
	const { data } = await api.get<DailyForecastResponse>("forecast", {			
		params: {
			latitude: "41.32",
			longitude: "69.25",
			daily: "temperature_2m_max",
			timezone: "auto"
		} satisfies DailyForecastRequestParams
	})
	return data
}
