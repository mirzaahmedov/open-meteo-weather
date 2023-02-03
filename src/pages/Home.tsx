import styled from "styled-components";
import Text from "@/components/Text";

const Container = styled.div`
  display: flex;
`;

const Home = () => {
  return (
    <Container>
      <Text variant="bs-bold">Text</Text>
      <Text as="h1" variant="xl-bold">
        Heading
      </Text>
    </Container>
  );
};

export default Home;
