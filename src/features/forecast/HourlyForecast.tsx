type HourlyForecastProps = {
  time: number
  latitude: number
  longitude: number
}

const HourlyForecast = ({ time, latitude, longitude }: HourlyForecastProps) => {
  return (
    <div>
      <h1>Hourly Forecast</h1>
    </div>
  )
}

export default HourlyForecast
