import { ElementType, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { Theme } from "@/themes/default"
import { Leaves } from '@/utils/types';

type Size = keyof Theme['font']['size']
type Weight = keyof Theme['font']['weight']
type Variants = `${Size}-${Weight}`;

type Color = keyof Theme['colors']
type Saturation = keyof Theme[keyof Theme]
type Colors = Leaves<Theme['colors']>

export type TextProps = {
  center?: boolean;
  variant?: Variants;
  color?: Colors;
  children?: ReactNode;
  as?: ElementType;
};

const Text = styled.p<TextProps>`
  ${({ theme, variant, color, center }) => {
    const [size, weight] = variant?.split('-') ?? [];
		const [name, saturation] =  color?.split('-') ?? []

    return css`
      font-size: ${theme.font.size[size as Size]};
      font-weight: ${theme.font.weight[weight as Weight]};
      color: ${name && saturation ? theme.colors[name as Color][saturation as Saturation] : "inherit"};
      text-align: ${center ? "center" : "auto"}
    `;
  }};
`;


export default Text;
