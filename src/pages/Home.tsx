import { useState, FormEventHandler, useEffect } from "react"
import { useOutletContext } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { AnimatePresence } from "framer-motion"
import styled from "styled-components"
import Text from "@/components/Text"
import Flex from "@/components/Flex"
import ChooseLocation from "@/features/location/ChooseLocation"
import Searchfield from "@/components/Searchfield"
import Loader from "@/assets/Loader"
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
const Aside = styled(Flex)`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
`
const Main = styled(Flex)`
  flex: 1;
  min-width: 0;
`
const Container = styled(Flex)`
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const Splash = styled(Flex)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.blue[500]};
`
const Home = () => {
  const [value, setValue] = useState("")
  const [search, setSearch] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  
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

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    
    const [value] = (e.target as HTMLFormElement).elements;
    setSearch((value as HTMLInputElement).value);
  };
  useEffect(() => {
    if (!isVisible) {
      setValue("")
      setSearch("")
    }
  }, [isVisible, search])


  return (
    <div>
      {isLoading ? (
        <Splash>
          <Loader />
        </Splash>
      ) : daily && hourly ? (
        <Container>
          <Aside direction="column">
            <Flex justify="center" padding="5">
              <Searchfield 
                open={isVisible}
                setOpen={setIsVisible}
                value={value}
                onChange={(e) => setValue((e.target as HTMLInputElement).value)} 
                onSubmit={handleSubmit} 
              />
            </Flex>
            <AnimatePresence>
              {isVisible ? (
                <ChooseLocation name={search} close={() => setIsVisible(false)} />
              ) : (
                <Today 
                  temperatureMax={daily.temperature_2m_max[0]} 
                  temperatureMin={daily.temperature_2m_min[0]} 
                  weatherCode={daily.weathercode[0]} 
                  wind={daily.windspeed_10m_max[0]} 
                  time={time}
                  sunset={daily.sunset[0]} 
                  sunrise={daily.sunrise[0]} 
                />
              )}
            </AnimatePresence>
          </Aside>
          <Main direction="column">
            <DailyForecast data={daily} />
            <HourlyForecast times={hourly?.time} temperatures={hourly?.temperature_2m} />
            <Flex justify="center" padding="5">
              <Text center variant="bs-normal" color="blue-300">&copy; 2021 Mirzaahmedov.dev</Text>
            </Flex>
          </Main>
        </Container>
      ) : null}
    </div>
  )
}

export default Home
