import { BaseHTMLAttributes, ElementType, ReactNode } from 'react';
import styled, { css } from 'styled-components';

const sizes = {
  sm: '0.75rem',
  bs: '0.875rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '4rem',
};
const weights = {
  normal: 400,
  medium: 500,
  bold: 700,
};

type Size = keyof typeof sizes;
type Weight = keyof typeof weights;
type Variants = `${Size}-${Weight}`;

type Props = {
  variant?: Variants;
  color?: string;
  children?: ReactNode;
  as?: ElementType;
};

const Text = styled.p<Props>`
  ${({ variant, color }) => {
    const [size, weight] = (variant?.split('-') as [Size, Weight]) ?? [];

    return css`
      font-size: ${sizes[size]};
      color: ${color};
      font-weight: ${weights[weight]};
    `;
  }};
`;

export default Text;
