export const CLEAR_DAY = 'clear-day.svg';
export const CLEAR_NIGHT = 'clear-night.svg';
export const CLOUDY = 'cloudy.svg';
export const FOG = 'fog.svg';
export const HEAVY_SHOWERS = 'heavy-showers.svg';
export const HEAVY_SLEET = 'heavy-sleet.svg';
export const HEAVY_SNOW = 'heavy-snow.svg';
export const OVERCAST = 'overcast.svg';
export const PARTLY_CLOUDY_DAY = 'partly-cloudy-day.svg';
export const PARTLY_CLOUDY_NIGHT = 'partly-cloudy-night.svg';
export const SHOWERS = 'showers.svg';
export const SLEET = 'sleet.svg';
export const SNOW = 'snow.svg';
export const THUNDERSTORM_SHOWERS = 'thunderstorm-showers.svg';
export const THUNDERSTORM_SNOW = 'thunderstorm-snow.svg';
export const WINDY = 'windy.svg';

const WEATHER_CODES = [
  { codes: [0], icon: CLEAR_DAY },
  { codes: [1], icon: PARTLY_CLOUDY_DAY },
  { codes: [2], icon: CLOUDY },
  { codes: [3], icon: OVERCAST },
  { codes: [45,48], icon: FOG },
  { codes: [51, 53, 55], icon: SHOWERS },
  { codes: [56, 57], icon: SLEET },
  { codes: [61, 63, 65], icon: SHOWERS },
  { codes: [66, 67], icon: HEAVY_SLEET },
  { codes: [71, 73, 75, 77], icon: SNOW },
  { codes: [80, 81, 82], icon: HEAVY_SHOWERS },
  { codes: [85, 86], icon: HEAVY_SNOW },
  { codes: [95], icon: THUNDERSTORM_SHOWERS },
  { codes: [96,99], icon: THUNDERSTORM_SNOW },
]

const WEATHER_DESCRIPTIONS: Record<number, string> = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Deposit of rime',
  51: 'Light drizzle',
  53: 'Moderate drizzle',
  55: 'Dense drizzle',
  56: 'Light freezing drizzle',
  57: 'Dense freezing drizzle',
  61: 'Slight rain',
  63: 'Moderate rain',
  65: 'Heavy rain',
  66: 'Light freezing rain',
  67: 'Heavy freezing rain',
  71: 'Slight snow',
  73: 'Moderate snow',
  75: 'Heavy snow',
  77: 'Snow grains',
  80: 'Slight rain shower',
  81: 'Moderate rain shower',
  82: 'Violent rain shower',
  85: 'Slight snow shower',
  86: 'Heavy snow shower',
  95: 'Thunderstorm (slight or moderate)',
  96: 'Thunderstorm with slight hail',
  99: 'Thunderstorm with heavy hail'
};

export const getWeatherIcon = (weatherCode: number) => {
  return WEATHER_CODES.find(({ codes }) => codes.includes(weatherCode))?.icon || CLEAR_DAY
}
export const getWeatherDescription = (weatherCode: number) => {
  return WEATHER_DESCRIPTIONS[weatherCode] || 'Clear sky'
}
