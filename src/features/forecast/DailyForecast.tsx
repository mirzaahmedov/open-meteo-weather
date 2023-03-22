import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import Flex from "@/components/Flex"
import Text from "@/components/Text"
import Card from "@/components/Card"

type DailyForecastProps = {
  data: any
}

const Container = styled(Flex)`
  min-width: 0;

  @media (max-width: 768px) {
    margin-top: 40px;
  }
  .swiper {
    padding: 0 20px;
  }
  & > ${Text} {
    margin-left: 20px;
  }
`
const SwiperContainer = styled(Flex)`
  width: 100%;
  min-width: 0;
`

const DailyForecast = ({ data }: DailyForecastProps) => {
  const daily = Array(data.temperature_2m_max.length).fill(0).reduce((acc, _, index) => {
    return [
      ...acc,
      {
        temperature_2m_max: data.temperature_2m_max[index],
        temperature_2m_min: data.temperature_2m_min[index],
        weathercode: data.weathercode[index],
        windspeed_10m_max: data.windspeed_10m_max[index],
        time: data.time[index],
        sunset: data.sunset[index],
        sunrise: data.sunrise[index],
      }
    ]
  }, [])

  return (
    <Container direction="column" items="start" gap={4}>
      <Text variant="md-bold">Daily</Text>
      <SwiperContainer>
        <Swiper spaceBetween={10} slidesPerView={"auto"}>
            {daily.map((item: any) => (
              <SwiperSlide>
                <Card data={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </SwiperContainer>
    </Container>
  )
}

export default DailyForecast
