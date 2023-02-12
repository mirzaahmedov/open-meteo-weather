import { ElementType, ReactNode } from 'react';
import styled, { css, DefaultTheme } from 'styled-components';

const sizes = {
  sm: '0.75rem',
  bs: '0.875rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  xxl: '4rem'
};
const weights = {
  normal: 400,
  medium: 500,
  bold: 700,
};

type Size = keyof typeof sizes;
type Weight = keyof typeof weights;
type Variants = `${Size}-${Weight}`;

export type TextProps = {
  center?: boolean;
  variant?: Variants;
  color?: string;
  children?: ReactNode;
  as?: ElementType;
};



type Join<K, P> = K extends string | number ?
  P extends string | number ?
  `${K}${"" extends P ? "" : "-"}${P}`
  : never : never;
type Leaves<T, D extends number = 10> = [D] extends [never] ? never : T extends object ?
  { [K in keyof T]-?: Join<K, Leaves<T[K], Prev[D]>> }[keyof T] : "";

type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20, ...0[]]

type Colors = Leaves<DefaultTheme["colors"]>

const Text = styled.p<TextProps>`
  ${({ theme, variant, color: colorText, center }) => {
    const [size, weight] = (variant?.split('-') as [Size, Weight]) ?? [];
    const [color, value] = colorText?.split('-') as [keyof DefaultTheme['colors'], keyof DefaultTheme['colors'][keyof DefaultTheme['colors']]] ?? []

    return css`
      font-size: ${sizes[size]};
      font-weight: ${weights[weight]};
      color: ${color && value ? theme.colors[color][value] : "inherit"};
      text-align: ${center ? "center" : "auto"}
    `;
  }};
`;


export default Text;
