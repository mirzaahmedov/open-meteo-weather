import styled from "styled-components";
import TextField from "@/components/Textfield";
import Text from "@/components/Text";

import { LocationIcon } from "@/assets/icons";

const Container = styled.div`
  padding: 2.5rem;
`;
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
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
      <Text as="h1" variant="xl-bold">
        Heading
      </Text>
    </Container>
  );
};

export default Home;
