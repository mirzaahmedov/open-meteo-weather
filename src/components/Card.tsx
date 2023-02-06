import React from 'react';
import styled, { css, useTheme } from 'styled-components';
import Flex from './Flex';
import Text from './Text';

interface WeatherData {
  date: string;
  temperature: {
    daytime: string;
    evening: string;
  };
  weatherType: string;
}

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

const Temperature = styled.div<Props>`
  ${({ variant }) => {
    if (variant === 'md') {
      return css``;
    }
  }}

  & > ${Text}:last-child {
    color: red;
  }
`;

type CardVariant = 'sm' | 'md';

const Card = (props: Props) => {
  const { data } = props;
  const { colors } = useTheme();

  return (
    <CardContainer {...props}>
      <Flex direction="column">
        <Text variant="bs-normal" color={colors.blue['200']}>
          {data.date}
        </Text>
        <Temperature {...props}>
          <Text variant="bs-normal" color={colors.blue['200']}>
            {data.temperature.daytime}
          </Text>
          <Text>{data.temperature.evening}</Text>
        </Temperature>
        {/* temp */}
      </Flex>
    </CardContainer>
  );
};

export default Card;
