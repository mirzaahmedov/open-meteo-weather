import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { LocationIcon } from "@/assets/icons";

const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 38px;
  width: 224px;
  border-radius: 20px;
  padding: 0 0.875rem;
  background: ${({ theme }) => theme.colors.white.transparent};
  color: ${({ theme }) => theme.colors.white.main};
  overflow: hidden;
  border: none;
  cursor: pointer;
`;
const Label = styled.label`
  svg {
    display: block;
  }
`;
const Content = styled.span`
  flex: 1;
  appearance: none;
  background: none;
  border: none;
  font-size: 0.875rem;
  color: inherit;
`;

type Props = ButtonHTMLAttributes<HTMLButtonElement>

const SelectButton = ({ ...props }: Props) => {
  return (
    <Container {...props}>
      <Label><LocationIcon /></Label>
      <Content>Choose your location</Content>
    </Container>
  );
};

export default SelectButton;
