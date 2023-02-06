import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import Flex from "@/components/Flex";
import TextField from "@/components/Textfield";
import Text from "@/components/Text";
import Chart from "@/components/Chart";

import { LocationIcon } from "@/assets/icons";
import { getTodaysWeather } from "@/api/queries/forecast";

const Container = styled.div`
  padding: 2.5rem;
`;
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const WeatherToday = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 150px;
`;

const formatter = new Intl.NumberFormat("en-US", {
  signDisplay: "exceptZero",
});

const Home = () => {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(
    null
  );

  const { data, isLoading, isError } = useQuery(
    ["weather", position?.x, position?.y],
    () => getTodaysWeather(position!),
    { enabled: !!position }
  );

  console.log(data);

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition({
          x: position.coords.latitude,
          y: position.coords.longitude,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <Container>
      <Flex padding="0 0 10 10" pb={10} gap={4} justify="center">
        <Text>One</Text>
        <Text>Two</Text>
        <Text>Three</Text>
      </Flex>
      <Chart />
      <Header>
        <TextField
          value="NewYork, United States"
          onChange={() => {}}
          icon={<LocationIcon />}
        />
      </Header>
      <WeatherToday>
        <Image src="/images/partly_day_storm_light.png" alt="Cloud Light" />
        <Text as="h1" variant="xl-medium">
          {data ? formatter.format(data.hourly.temperature_2m[0]) : null}°
        </Text>
      </WeatherToday>
    </Container>
  );
};

export default Home;
