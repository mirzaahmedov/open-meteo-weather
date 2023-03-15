import { SunIcon, SunsetIcon } from '@/assets/icons';
import styled, { css } from 'styled-components';
import { getWeatherIcon } from "@/utils/weather"
import { getFormattedDate } from "@/utils/date"
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

//card types
type CardVariant = 'sm' | 'md';

//props
type Props = {
  variant: CardVariant;
  data: WeatherData;
};

const CardContainer = styled.div<Props>`
  background: #60a5fa;
  border-radius: 20px;
  ${({ variant }) => {
    if (variant === 'md') {
      return css`
        padding: 20px;
      `;
    } else {
      return css`
        max-width: 148px;
        max-height: 190px;
        padding: 10px 20px;
      `;
    }
  }};
`;

const CardHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;
`;

const Temperature = styled.div<Props>`
  display: flex;
  column-gap: 5px;
  ${({ variant }) => {
    if (variant === 'md') {
      return css``;
    }
  }}

  & > ${Text}:last-child {
    /* color: red; */
  }
`;

const WeatherIcon = styled.div<Props>`
  width: 110px;
  height: 100px;
  position: relative;
  top: 10px;
  z-index: 1000;

  ${({ variant }) => {
    if (variant === 'md') {
      return css``;
    }
  }}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: relative;

  z-index: 1000;
`;

const DayInfo = styled.div<Props>`
  display: ${({ variant }) => (variant === 'md' ? 'flex' : 'none')};
  flex-direction: column;
  row-gap: 20px;

  & > div {
    display: flex;
    align-items: center;
    column-gap: 12px;
  }
`;

const Card = (props: Props) => {
  const { data, variant } = props;

  return (
    <CardContainer {...props}>
      <Flex
        direction={variant === 'md' ? 'row' : 'column'}
        justify={variant === 'md' ? 'between' : 'start'}
        rowGap={2}
        colGap={5}>
        <CardHead>
          <Temperature {...props}>
            <Text variant="xl-bold" color="white-main">
              {data.temperature_2m_max > 0 ? "+" : ""}{parseInt(data.temperature_2m_max.toString())}&deg;
            </Text>
            <Text variant="bs-normal" color="blue-200">
              {data.temperature_2m_min > 0 ? "+" : ""}{parseInt(data.temperature_2m_min.toString())}&deg;
            </Text>
          </Temperature>
          <Text center variant="sm-normal" color="blue-200">
            {getFormattedDate(data.time as any)}
          </Text>
        </CardHead>
        <DayInfo {...props}>
          <div>
            <SunsetIcon />
            <Text>{data.sunset}</Text>
          </div>
          <div>
            <SunIcon />
            <Text>{data.sunrise}</Text>
          </div>
        </DayInfo>
        <WeatherIcon {...props}>
          <Image 
            src={`/images/${getWeatherIcon(data.weathercode)}`} 
            alt="weather" 
          />
        </WeatherIcon>
      </Flex>
    </CardContainer>
  );
};

export default Card;
