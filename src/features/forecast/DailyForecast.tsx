type DailyForecastProps = {
  time: number
  latitude: number
  longitude: number
}

const DailyForecast = ({ time, latitude, longitude }: DailyForecastProps) => {
  return (
    <div>
      <h1>Daily Forecast</h1>
    </div>
  )
}

export default DailyForecast
