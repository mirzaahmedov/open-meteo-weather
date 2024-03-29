import styled from 'styled-components';
import { getWeatherIcon } from "@/utils/weather"
import { getFormattedDate, getTimeStamp } from "@/utils/date"
import { useSetSearchParam } from "@/utils/searchParams"
import Flex from './Flex';
import Text from './Text';

//data types
interface WeatherData {
  time: string;
  sunset: string;
  sunrise: string;
  temperature_2m_max: number;
  temperature_2m_min: number;
  weathercode: number;
}

//props
type Props = {
  data: WeatherData;
};

const Container = styled(Flex)`
  padding: 10px 20px;
  gap: 8px;
  background: #60a5fa;
  border-radius: 20px;
  cursor: pointer;
`;
const Temperature = styled.div`
  display: flex;
  column-gap: 5px;
  margin-top: 10px;
`;
const DateTime = styled(Text)`
  text-transform: uppercase;
`
const WeatherIcon = styled.img`
  width: 120px;
`;

const Card = (props: Props) => {
  const { data } = props;

  const setParams = useSetSearchParam()

  const handleClick = () => {
    const date = new Date(data.time)
    const today = new Date()

    if (date.getTime() - today.getTime() > 6 * 24 * 3600 * 1000) return

    setParams({ time: getTimeStamp(data.time).toString() })
  }

  return (
    <Container onClick={handleClick} items="center" direction="column">
      <WeatherIcon
          src={`/images/${getWeatherIcon(data.weathercode)}`} 
          alt="weather" 
      />
      <DateTime center variant="sm-normal" color="blue-200">
        {getFormattedDate(data.time as any)}
      </DateTime>
      <Temperature>
        <Text variant="xxl-bold" color="white-main">
          {parseInt(data.temperature_2m_max.toString())}&deg;
        </Text>
        <Text variant="bs-normal" color="blue-200">
          {parseInt(data.temperature_2m_min.toString())}&deg;
        </Text>
      </Temperature>
    </Container>
  );
};

export default Card;
