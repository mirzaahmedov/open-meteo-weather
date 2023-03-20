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
import { useWindowSize } from "@/utils/useWindowSize";
import { useTheme } from "styled-components";

const times = [
  "2023-02-04T00:00",
  "2023-02-04T01:00",
  "2023-02-04T02:00",
  "2023-02-04T03:00",
  "2023-02-04T04:00",
  "2023-02-04T05:00",
  "2023-02-04T06:00",
  "2023-02-04T07:00",
  "2023-02-04T08:00",
  "2023-02-04T09:00",
  "2023-02-04T10:00",
  "2023-02-04T11:00",
  "2023-02-04T12:00",
  "2023-02-04T13:00",
  "2023-02-04T14:00",
  "2023-02-04T15:00",
  "2023-02-04T16:00",
  "2023-02-04T17:00",
  "2023-02-04T18:00",
  "2023-02-04T19:00",
  "2023-02-04T20:00",
  "2023-02-04T21:00",
  "2023-02-04T22:00",
  "2023-02-04T23:00",
  "2023-02-05T00:00",
];

const temperatures = [
  5.2, 5.4, 5.6, 5.6, 6, 7, 8.4, 9.7, 10.6, 11.3, 11.4, 11.5, 11, 9.7, 8.9, 8.2,
  7.9, 7.2, 6.6, 6.3, 6.1, 6.1, 6.3, 6.5,
];

const data = times.map((time, index) => ({
  x: time,
  y: temperatures[index],
}));

const Tick = ({ text, ...props }: VictoryLabelProps) => {
  const [time, temperature] = text as [string, number];

  const date = new Date(time);

  const hours = date.getHours();
  const minutes = date.getMinutes();

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

const Chart = () => {
  const { colors } = useTheme() as any;
  const { width } = useWindowSize();

  return (
    <div>
        <defs>
          <filter id="filter" x="0" y="0" width="200%" height="200%">
            <feOffset result="offOut" in="SourceGraphic" dx="2" dy="2" />
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
          </filter>
        </defs>
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
            const index = data.findIndex((d) => d.x === t);
            return [t, data[index].y];
          }}
          tickLabelComponent={<Tick />}
          style={{
            axis: { stroke: "transparent" },
            grid: { stroke: colors.white.transparent, strokeWidth: 1 },
            tickLabels: { fill: colors.white.main, fontSize: 14 },
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default Chart;
