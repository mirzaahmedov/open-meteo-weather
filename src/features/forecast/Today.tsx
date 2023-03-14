import styled from 'styled-components';
import Flex from "@/components/Flex"
import Text from "@/components/Text"

const Container = styled(Flex)`
  width: 100%;
  max-width: 400px;
`

type Props = {
  temperature: number
}

const Today = ({ temperature }: Props) => {
  return (
    <Container direction='column' items="center">
      <Text variant="4xl-bold">{temperature > 0 ? "+" : ""}{temperature}&deg;</Text>
    </Container>
  );
};

export default Today
