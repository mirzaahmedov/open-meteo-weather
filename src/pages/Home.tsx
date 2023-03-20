import { useState } from "react"
import { useOutletContext } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { AnimatePresence } from "framer-motion"
import styled from "styled-components"
import Text from "@/components/Text"
import Flex from "@/components/Flex"
import CountrySelect from "@/features/county/CountrySelect"
import Searchfield from "@/components/Searchfield"
import Today from "@/features/forecast/Today"
import DailyForecast from "@/features/forecast/DailyForecast"
import HourlyForecast from "@/features/forecast/HourlyForecast"
import { queryDailyForecast } from "@/services/forecast/daily"
import { queryHourlyForecast } from "@/services/forecast/hourly"

type OutletContext = {
  time: number
  latitude: number
  longitude: number
}
const SidePanel = styled(Flex)`
  max-width: 400px;
  width: 100%;
`
const Container = styled(Flex)`
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Home = () => {
  const [search, setSearch] = useState("")
  const [showCountrySearch, setShowCountrySearch] = useState(false)
  
  const { time, latitude, longitude } = useOutletContext<OutletContext>()
  const { data: dailyForecast, isLoading } = useQuery({
    queryKey: ["dailyForecast", time, latitude, longitude],
    queryFn: () => queryDailyForecast({ time, latitude, longitude }),
  });
  const { data: hourlyForecast } = useQuery({
    queryKey: ["hourlyForecast", time, latitude, longitude],
    queryFn: () => queryHourlyForecast({ time, latitude, longitude }),
  });

  const daily = dailyForecast?.daily
  const hourly = hourlyForecast?.hourly

  return (
    <div>
      {isLoading ? "Loading" : daily && hourly ? (
        <Container>
          <AnimatePresence>
            {showCountrySearch ? (
              <CountrySelect onClose={setShowCountrySearch} />
            ) : (
            <div>
              <SidePanel direction="column" items="center">
                <Flex padding="5">
                  <Searchfield value={search} onChange={e => setSearch((e.target as HTMLInputElement).value)} />
                </Flex>
                <Today 
                  temperatureMax={daily.temperature_2m_max[0]} 
                  temperatureMin={daily.temperature_2m_min[0]} 
                  weatherCode={daily.weathercode[0]} 
                  wind={daily.windspeed_10m_max[0]} 
                  time={time}
                  sunset={daily.sunset[0]} 
                  sunrise={daily.sunrise[0]} 
                />
              </SidePanel>
              <Flex direction="column">
                <DailyForecast data={daily} />
                <HourlyForecast times={hourly?.time} temperatures={hourly?.temperature_2m} />
              </Flex>
            </div>
            )}
          </AnimatePresence>
          <Flex justify="center" padding="5">
            <Text center variant="bs-normal" color="blue-300">&copy; 2021 Mirzaahmedov.dev</Text>
          </Flex>
        </Container>
      ) : null}
    </div>
  )
}

export default Home
