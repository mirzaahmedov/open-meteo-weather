export const CLOUDY = [45, 48, 51, 53, 55, 56, 57]
export const PARTLY_CLOUDY = [1, 2, 3]
export const RAIN_STORM = [80, 81, 82]
export const RAINY = [61, 63, 65, 66, 67]
export const SLIGHT_TOUCH_HAPPYDAY = [0]
export const SNOWY = [71, 73, 75, 85, 86, 77]
export const THUNDERSTORM = [95, 96, 99]

export const getWeatherIcon = (weatherCode: number) => {
  if (CLOUDY.includes(weatherCode)) return "cloudy.svg"
  if (PARTLY_CLOUDY.includes(weatherCode)) return "partly-cloudy-day.svg"
  if (RAIN_STORM.includes(weatherCode)) return "windy.svg"
  if (RAINY.includes(weatherCode)) return "showers.svg"
  if (SLIGHT_TOUCH_HAPPYDAY.includes(weatherCode)) return "clear-day.svg"
  if (SNOWY.includes(weatherCode)) return "snow.svg"
  if (THUNDERSTORM.includes(weatherCode)) return "thunderstorm-snow.svg"
}
export const getWeatherDescription = (weatherCode: number) => {
  if (CLOUDY.includes(weatherCode)) return "Cloudy"
  if (PARTLY_CLOUDY.includes(weatherCode)) return "Partly Cloudy"
  if (RAIN_STORM.includes(weatherCode)) return "Rain Showers"
  if (RAINY.includes(weatherCode)) return "Rainy"
  if (SLIGHT_TOUCH_HAPPYDAY.includes(weatherCode)) return "Sunny"
  if (SNOWY.includes(weatherCode)) return "Snow"
  if (THUNDERSTORM.includes(weatherCode)) return "Thunderstorm"
}
