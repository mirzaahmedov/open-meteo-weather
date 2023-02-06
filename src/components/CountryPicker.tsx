import React from "react";
import styled, { useTheme } from "styled-components";
import Flex from "./Flex";
import Text from "./Text";

type DataType = {
  image: string;
  title: string;
};

type CountryPickerProps = {
  data: DataType[];
};

const CountryContainer = styled.div`
  max-width: 353px;
  height: 535px;
  overflow: auto;
  background: ${({ theme }) => theme.colors.white.transparent};
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 20px;
`;

const Image = styled.img`
  width: 30px;
  height: auto;
`;

const word = "new";

const firstIndex = "NewYork, United".toLowerCase().indexOf(word);

console.log("NewYork, United".slice(firstIndex, firstIndex + word.length));

const CountryPicker = ({ data, ...props }: CountryPickerProps) => {
  const { colors } = useTheme();
  return (
    <CountryContainer>
      {data.map((d) => (
        <Flex
          style={{ borderBottom: `1px solid ${colors.white.transparent}` }}
          gap={7}
          padding="4.5"
        >
          <Image src={d.image} />
          <Text variant="bs-normal">
            {d.title
              .toLowerCase()
              .split(word)
              .map((v) => (
                <span>
                  {v}
                  {word}
                </span>
              ))}
          </Text>
        </Flex>
      ))}
    </CountryContainer>
  );
};

export default CountryPicker;
