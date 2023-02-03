import { InputHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 38px;
  width: 224px;
  border-radius: 20px;
  padding: 0 0.875rem;
  background: ${({ theme }) => theme.colors.white.transparent};
  overflow: hidden;

  :focus-within {
    outline: 2px solid ${({ theme }) => theme.colors.white.main};
  }
`;
const Label = styled.label`
  svg {
    display: block;
  }
`;
const Input = styled.input`
  flex: 1;
  appearance: none;
  background: none;
  border: none;
  font-size: 0.875rem;
  color: inherit;

  :focus {
    outline: none;
  }
`;

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
};

const TextField = ({ icon, ...props }: TextFieldProps) => {
  return (
    <Container>
      <Label>{icon}</Label>
      <Input {...props} />
    </Container>
  );
};

export default TextField;
