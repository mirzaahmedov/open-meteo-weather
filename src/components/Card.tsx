import { SunIcon, SunsetIcon } from '@/assets/icons';
import styled, { css, useTheme } from 'styled-components';
import Flex from './Flex';
import Text from './Text';

//data types
interface WeatherData {
  date: string;
  temperature: {
    daytime: number;
    evening: number;
  };
  weatherType: string;
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
            {data.date}
          </Text>
          <Temperature {...props}>
            <Text variant="lg-bold" color={colors.white.main}>
              {data.temperature.daytime}°
            </Text>
            <Text variant="sm-normal" color={colors.blue[200]}>
              {data.temperature.evening}
            </Text>
          </Temperature>
        </CardHead>
        <DayInfo {...props}>
          <div>
            <SunsetIcon />
            <Text>18:00</Text>
          </div>
          <div>
            <SunIcon />
            <Text>18:00</Text>
          </div>
        </DayInfo>
        <WeatherIcon {...props}>
          <Image src="/images/partly_day_storm_light.png" alt="weather" />
        </WeatherIcon>
      </Flex>
    </CardContainer>
  );
};

export default Card;
