import { useState } from "react"
import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import Flex from "@/components/Flex"
import Text from "@/components/Text"
import Card from "@/components/Card"
import Skeleton from "@/components/Skeleton"

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
  const [visible, setVisible] = useState(false)

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
    <>
      {
        !visible && (
          <Container direction="column" items="start" gap={4}>
            <Skeleton width={70}></Skeleton>
            <Skeleton.List count={7} gap={10} padding={20}>
              <Skeleton width={150} height={230}></Skeleton>
            </Skeleton.List>
          </Container>
        )
      }
      <Container onLoad={() => setVisible(true)} style={{ display: visible ? "" : "none" }} direction="column" items="start" gap={4}>
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
    </>
  )
}

export default DailyForecast
