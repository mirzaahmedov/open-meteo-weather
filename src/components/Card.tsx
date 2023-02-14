import { SunIcon, SunsetIcon } from '@/assets/icons';
import { getDate } from '@/utils/formatters';
import styled, { css, useTheme } from 'styled-components';
import Flex from './Flex';
import Text from './Text';

const weatherCodes = {
  clear: [0],
  mainly_clear: [1, 2, 3],
  cloudy: [45, 48],
  thnderstorm: [95, 96, 99],
  rainy: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82],
  snowy: [71, 73, 75, 77, 85, 86],
};

const getPath = (code: number): string => {
  const path = '/images/';
  if (weatherCodes.clear.includes(code)) {
    return path + 'slight_touch_happyday_light.png';
  }
  if (weatherCodes.mainly_clear.includes(code)) {
    return path + 'partly_cloudy_light.png';
  }
  if (weatherCodes.cloudy.includes(code)) {
    return path + 'cloudy_light.png';
  }
  if (weatherCodes.rainy.includes(code)) {
    return path + 'rainy_light.png';
  }
  if (weatherCodes.snowy.includes(code)) {
    return path + 'snowy_light.png';
  }
  if (weatherCodes.thnderstorm.includes(code)) {
    return path + 'thnderstorm_light.png';
  } else {
    return path + 'slight_touch_happyday_light.png';
  }
};

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
        max-height: 180px;
        padding: 10px 20px;
      `;
    }
  }};
`;

const CardHead = styled.div`
  display: flex;
  flex-direction: column;
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
  width: 73.61px;
  height: 80px;

  ${({ variant }) => {
    if (variant === 'md') {
      return css``;
    }
  }}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
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
  const { colors } = useTheme();

  return (
    <CardContainer {...props}>
      <Flex
        direction={variant === 'md' ? 'row' : 'column'}
        justify={variant === 'md' ? 'between' : 'start'}
        rowGap={2}
        colGap={5}>
        <CardHead>
          <Text variant="bs-normal" color={colors.blue['200']}>
            {data.time}
          </Text>
          <Temperature {...props}>
            <Text variant="lg-bold" color={colors.white.main}>
              {data.temperature_2m_max}°
            </Text>
            <Text variant="sm-normal" color={colors.blue[200]}>
              {data.temperature_2m_min}
            </Text>
          </Temperature>
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
          <Image src={getPath(data.weathercode)} alt="weather" />
        </WeatherIcon>
      </Flex>
    </CardContainer>
  );
};

export default Card;
