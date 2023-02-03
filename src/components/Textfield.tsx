import { InputHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
};

const TextField = ({ icon, ...props }: TextFieldProps) => {
  return (
    <Container>
      <label>{icon}</label>
      <input {...props} />
    </Container>
  );
};

export default TextField;
