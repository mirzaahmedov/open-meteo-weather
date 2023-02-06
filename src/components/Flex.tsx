import styled from "styled-components";

const alignments = {
  center: "center",
  start: "flex-start",
  end: "flex-end",
  stretch: "stretch",
  baseline: "baseline",
};
const justifications = {
  center: "center",
  start: "flex-start",
  end: "flex-end",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
};

type CssValue =
  | `${number} ${number} ${number} ${number}`
  | `${number} ${number}`
  | `${number}`;

type FlexProps = {
  items?: keyof typeof alignments;
  justify?: keyof typeof justifications;
  gap?: number;
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  padding?: CssValue;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  margin?: CssValue;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
};

const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: ${({ items }) => items && alignments[items]};
  justify-content: ${({ justify }) => justify && justifications[justify]};
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap = 0 }) => gap * 4}px;
  padding: ${({ padding }) =>
    padding &&
    padding
      .split(" ")
      .map((v) => Number(v) * 4)
      .join("px ") + "px"};
  padding-top: ${({ pt }) => pt && pt * 4}px;
  padding-bottom: ${({ pb }) => pb && pb * 4}px;
  padding-left: ${({ pl }) => pl && pl * 4}px;
  padding-right: ${({ pr }) => pr && pr * 4}px;
  margin: ${({ margin }) =>
    margin &&
    margin
      .split(" ")
      .map((v) => Number(v) * 4)
      .join("px ") + "px"};
  margin-top: ${({ mt }) => mt && mt * 4}px;
  margin-bottom: ${({ mb }) => mb && mb * 4}px;
  margin-left: ${({ ml }) => ml && ml * 4}px;
  margin-right: ${({ mr }) => mr && mr * 4}px;
`;

export default Flex;
