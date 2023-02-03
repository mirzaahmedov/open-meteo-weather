import styled from "styled-components";
import Text from "@/components/Text";
import TextField from "@/components/Textfield";

const Container = styled.div`
  display: flex;
`;

const Home = () => {
  return (
    <Container>
      <Text variant="bs-bold">Text</Text>
      <TextField icon="some" />
      <Text as="h1" variant="xl-bold">
        Heading
      </Text>
    </Container>
  );
};

export default Home;
