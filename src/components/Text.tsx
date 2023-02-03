import { BaseHTMLAttributes, ElementType, ReactNode } from "react";
import styled, { css } from "styled-components";

const sizes = {
  sm: "0.75rem",
  bs: "1rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "4rem",
};
const weights = {
  normal: 400,
  medium: 500,
  bold: 700,
};

type Variants = `${keyof typeof sizes}-${keyof typeof weights}`;

type Props = {
  variant?: Variants;
  children?: ReactNode;
  as?: ElementType;
};

const Element = styled.p<Props>`
  ${({ variant }) => {
    const [size, weight] =
      (variant?.split("-") as [keyof typeof sizes, keyof typeof weights]) ?? [];

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
