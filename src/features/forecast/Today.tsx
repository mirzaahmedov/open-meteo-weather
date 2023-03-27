import { useState } from "react"
import styled from 'styled-components';
import Flex from "@/components/Flex"
import Text from "@/components/Text"
import { getHoursAndMinutes, getFormattedDate } from '@/utils/date';
import { getWeatherIcon, getWeatherDescription } from "@/utils/weather"
import { WindIcon, SunIcon, SunsetIcon } from "@/assets/icons"
import Skeleton from "@/components/Skeleton"

const Container = styled(Flex)`
  width: 100%;
  max-width: 400px;
`
const WeatherIcon = styled.img`
  width: 240px;
`

type Props = {
  temperatureMin: number
  temperatureMax: number
  weatherCode: number
  wind: number
  sunrise: string
  sunset: string
  time: number
}

const Today = ({ time, temperatureMin, temperatureMax, wind, weatherCode, sunset, sunrise }: Props) => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      {
        !visible && (
          <Container direction="column" items="center" mt={10} gap={2}>
            <Skeleton width={240} height={240}></Skeleton>
            <Skeleton width={150}></Skeleton>
            <Skeleton width={150} height={90}></Skeleton>
            <Skeleton width={150}></Skeleton>
            <Skeleton.List count={3} gap={32}>
              <Skeleton width={70}></Skeleton>
            </Skeleton.List>
          </Container>
        )
      }
      <Container onLoad={() => setVisible(true)} style={{ display: visible ? "" : "none" }} mt={10} direction='column' items="center" gap={2}>
        <WeatherIcon src={`/images/${getWeatherIcon(weatherCode)}`} />
        <Flex direction="column" gap={2}>
          <Text center as="p" color="blue-200" variant="sm-normal">
            {getWeatherDescription(weatherCode)}
          </Text>
          <Flex gap={2}>
            <Text variant="4xl-bold">{parseInt(temperatureMax.toString())}&deg;</Text>
            <Text variant="lg-normal" color="blue-300">{parseInt(temperatureMin.toString())}&deg;</Text>
          </Flex>
          <Text center variant="sm-normal">{getFormattedDate(time, true)}</Text>
        </Flex>
        <Flex mt={10} gap={8}>
          <Flex gap={3} items="center">
            <WindIcon /> <Text variant="sm-normal">{wind}km/h</Text>
          </Flex>
          <Flex gap={3} items="center">
            <SunIcon /> <Text variant="sm-normal">{getHoursAndMinutes(sunrise)}</Text>
          </Flex>
          <Flex gap={3} items="center">
            <SunsetIcon /> <Text variant="sm-normal">{getHoursAndMinutes(sunset)}</Text>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default Today
