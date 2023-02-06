import { BaseHTMLAttributes, ElementType, ReactNode } from "react";
import styled, { css } from "styled-components";

const sizes = {
  sm: "0.75rem",
  bs: "0.875rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "4rem",
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
  children?: ReactNode;
  as?: ElementType;
};

const Element = styled.p<Props>`
  ${({ variant }) => {
    const [size, weight] = (variant?.split("-") as [Size, Weight]) ?? [];

    return css`
      font-size: ${sizes[size]};
      font-weight: ${weights[weight]};
    `;
  }};
`;

const Text = ({
  children,
  ...props
}: BaseHTMLAttributes<HTMLParagraphElement> & Props) => {
  return <Element {...props}>{children}</Element>;
};

export default Text;
