import { useState, useEffect } from "react";
import {
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryZoomContainer,
  VictoryScatter,
  VictoryGroup,
  VictoryLabel,
  VictoryLabelProps,
} from "victory";
import Flex from "@/components/Flex";
import Text from "@/components/Text";
import { useWindowSize } from "@/utils/useWindowSize";
import styled, { useTheme } from "styled-components";

const Container = styled(Flex)`
  & > ${Text} {
    margin-left: 20px;
  }
`;

const Tick = ({ text, ...props }: VictoryLabelProps) => {
  const [time, temperature] = text as [string, number];

  const date = new Date(time);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  if (time === "Now") {
    return (
      <VictoryLabel
        className="tick-label"
        text={[
          `${temperature > 0 ? "+" : temperature < 0 ? "-" : ""}${Math.floor(
            temperature
          )}`,
          `${time}`,
        ]}
        {...props}
      />
    );
  }

  return (
    <VictoryLabel
      className="tick-label"
      text={[
        `${temperature > 0 ? "+" : temperature < 0 ? "-" : ""}${Math.floor(
          temperature
        )}`,
        `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}`,
      ]}
      {...props}
    />
  );
};

type Props = {
  times: string[]
  temperatures: number[]
}

const HourlyForecast = ({ times, temperatures }: Props) => {
  const [data, setData] = useState<any>([]);

  const { colors } = useTheme() as any;
  const { width } = useWindowSize();

  useEffect(() => {
    setData(times.map((time, index) => ({
      x: time,
      y: temperatures[index],
    })))
  }, [times, temperatures]);

  if (!data) {
    return null  
  }


  return (
    <Container direction="column" mt={12}>
      <Text variant="md-bold">Hourly</Text>
      <svg display={"none"}>
        <defs>
          <filter id="filter" x="0" y="0" width="200%" height="200%">
            <feOffset result="offOut" in="SourceGraphic" dx="2" dy="2" />
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
          </filter>
        </defs>
      </svg>
      <VictoryChart
        width={width}
        height={400}
        title="hourly"
        padding={{ left: 0, right: 0, top: 20, bottom: 40 }}
        domainPadding={{ x: 10, y: 20 }}
        containerComponent={
          <VictoryZoomContainer
            zoomDomain={{ x: [0, Math.min(Math.floor((width / 400) * 6), 20)] }}
            allowZoom={false}
          />
        }
      >
        <VictoryGroup color={colors.white.main} data={data.slice(0, 24)}>
          <VictoryLine
            style={{ data: { strokeWidth: "2px", filter: "url(#filter)" } }}
          />
          <VictoryScatter
            style={{
              data: {
                fill: colors.blue[500],
                stroke: colors.white.main,
                strokeWidth: "2px",
              },
            }}
            size={6}
          />
        </VictoryGroup>
        <VictoryAxis
          data={data}
          tickFormat={(t) => {
            const index = data.findIndex((d: any) => d.x === t);

            if (index >= 0 && index < data.length) {
               const date = new Date(t)
               const now = new Date()

               if (now.getHours() === date.getHours()) {
                  return ["Now", data[index].y]
               }
              
               return [t, data[index].y];
            }

            return [0, ""]
          }}
          tickLabelComponent={<Tick />}
          style={{
            axis: { stroke: "transparent" },
            grid: { stroke: colors.white.transparent, strokeWidth: 1 },
            tickLabels: { fill: colors.white.main, fontSize: 14 },
          }}
        />
      </VictoryChart>
    </Container>
  );
};

export default HourlyForecast;
