import { useState } from "react"
import { useOutletContext } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import CountrySelect from "@/features/county/CountrySelect"
import SelectButton from "@/components/SelectButton"
import Today from "@/features/forecast/Today"
import { queryDailyForecast } from "@/services/forecast/daily"

type OutletContext = {
  time: number
  latitude: number
  longitude: number
}

const Home = () => {
  const [showCountrySelect, setShowCountrySelect] = useState(false)
  
  const { time, latitude, longitude } = useOutletContext<OutletContext>()
  const { data: dailyForecast, isLoading } = useQuery({
    queryKey: ["dailyForecast", time, latitude, longitude],
    queryFn: () => queryDailyForecast({ time, latitude, longitude }),
  });

  const daily = dailyForecast?.daily

  return (
    <div>
      <SelectButton onClick={() => setShowCountrySelect(pre => !pre)} />
      {isLoading ? "Loading" : daily ? (
        <Today temperature={daily.temperature_2m_max[0]} />
      ) : null}
      { showCountrySelect ?
        <CountrySelect onClose={setShowCountrySelect} />
        : null
      }
    </div>
  )
}

export default Home
