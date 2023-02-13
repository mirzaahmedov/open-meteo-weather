import { getDailyForecastQuery } from "@/api/queries/forecast"
import { useQuery } from "@tanstack/react-query"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

import useGeolocation from "@/utils/geolocation"
import { LocationIcon } from "@/assets/icons"
import Section from "@/components/Section"
import Flex from "@/components/Flex"
import Card from "@/components/Card"
import Chart from "@/components/Chart"
import Textfield from "@/components/Textfield"
import Text from "@/components/Text"


const Home = () => {
	const { location } = useGeolocation()
  const { data } = useQuery({
    queryKey: ["daily"],
    queryFn: () => getDailyForecastQuery({ location }),
		enabled: !!location
  })


  return (
    <main>
      <Flex gap={5} direction="column" items="center">
        <Flex padding="10" justify="center">
          <Textfield icon={<LocationIcon />} defaultValue="New York, United States" />
        </Flex>
        <Flex gap={3} items="center" direction="column">
          <img width="160px" src="/images/partly_day_storm_light.png" alt="Cloudy Light" />
          <Text center variant="sm-normal" color="blue-300">Cloudy Lightning</Text>
          <Flex justify="center">
            <Text variant="xxl-medium">20&deg;</Text>
            <Text color="blue-200" variant="xl-medium">4&deg;</Text>
          </Flex>
          <Text center variant="bs-normal">Sunday, 3 November</Text>
        </Flex>
      </Flex>
      <Section title="Daily">
        <Swiper style={{ padding: '0 20px' }} spaceBetween={10} slidesPerView={"auto"}>
          {Array.isArray(data?.daily.time) ? data?.daily.time.map((day, index) => <SwiperSlide style={{ maxWidth: 148 }}><Card variant="sm" data={{ weatherType: "0", date: (new Date(day)).toLocaleDateString(), temperature: { evening: 2.0, daytime: data.daily.temperature_2m_max[index] } }} /></SwiperSlide>) : null}
        </Swiper>
      </Section>
      <Section title="Hourly">
        <Chart />
      </Section>
    </main>
  )
}

export default Home
