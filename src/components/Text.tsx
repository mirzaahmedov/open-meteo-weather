import { BaseHTMLAttributes, ElementType, ReactNode } from "react";
import styled, { StyledProps } from "styled-components";

type FontSize = "small" | "normal" | "medium" | "large" | "xlarge";
type FontWeight = "light" | "normal" | "medium" | "bold";

type TextVairants = `${FontSize}/${FontWeight}`;

type Props = {
  vairant?: TextVairants;
  children?: ReactNode;
  as?: ElementType;
};

const Element = styled.p``;

const Text = ({
  children,
  ...props
}: BaseHTMLAttributes<HTMLParagraphElement> & Props) => {
  return <Element {...props}>{children}</Element>;
};

export default Text;
