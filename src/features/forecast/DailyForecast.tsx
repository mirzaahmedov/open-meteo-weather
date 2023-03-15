import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import Flex from "@/components/Flex"
import Text from "@/components/Text"
import Card from "@/components/Card"

type DailyForecastProps = {
  data: any
}

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
    <Flex direction="column" items="start" gap={4}>
      <Text variant="md-bold">Daily</Text>
      <Swiper spaceBetween={10} slidesPerView={"auto"}>
          {daily.map((item: any) => (
            <SwiperSlide>
              <Card variant="sm" data={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </Flex>
  )
}

export default DailyForecast
