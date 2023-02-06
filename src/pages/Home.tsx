import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import TextField from "@/components/Textfield";
import Text from "@/components/Text";

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
`;
const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 150px;
`;

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
      <Text variant="bs-bold">Text</Text>
      <Header>
        <TextField
          value="NewYork, United States"
          onChange={() => {}}
          icon={<LocationIcon />}
        />
      </Header>
      <WeatherToday>
        <Image src="/images/partly_day_storm_light.png" alt="Cloud Light" />
      </WeatherToday>
      <Text as="h1" variant="xl-bold">
        {Array.isArray(data?.hourly) ? data?.hourly.temperature_2m[0] : null}°
      </Text>
    </Container>
  );
};

export default Home;
