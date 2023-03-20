import { useState, ButtonHTMLAttributes, useEffect } from "react";
import styled from "styled-components";
import { ArrowBack, LocationIcon } from "@/assets/icons";

const Container = styled.form`
  transition: width 0.3s;
`;
const Button = styled.button`
  appearance: none;
  display: flex;
  width: 100%;
  height: 38px;
  align-items: center;
  gap: 10px;
  border: none;
  cursor: pointer;
  padding: 0 0.875rem;
  background: ${({ theme }) => theme.colors.white.transparent};
  color: ${({ theme }) => theme.colors.white.main};
  overflow: hidden;
  border-radius: 20px;
`
const Label = styled.label`
  cursor: pointer;
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
const Input = styled.input`
  appearance: none;
  background: none;
  border: none;
  outline: none;
  color: inherit;
`;

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  open: boolean
  setOpen: (val: boolean) => void
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const Searchfield = ({ value, onChange, onSubmit, open, setOpen, ...props }: Props) => {
  const [width, setWidth] = useState(224)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth - 2 * 20)
    }
    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Container onSubmit={onSubmit} style={{
        width: open ? width : 224,
      }}
    >
      {
        open ? (
          <Button as="div">
            <Label onClick={() => setOpen(false)}><ArrowBack /></Label>
            <Input autoFocus onBlur={() => setOpen(false)} type="text" value={value} onChange={onChange} />
          </Button>
        ) : (
          <Button {...props} onClick={() => setOpen(true)}>
            <Label><LocationIcon /></Label>
            <Content>Choose your location</Content>
          </Button>
        )
      }
    </Container>
  );
};

export default Searchfield;
