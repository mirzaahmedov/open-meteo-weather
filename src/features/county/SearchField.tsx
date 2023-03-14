import { FormEventHandler, InputHTMLAttributes, SetStateAction } from "react"
import styled from "styled-components"
import { SearchIcon } from "@/assets/icons"; 

const Container = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 38px;
  gap: 12px;
  padding: 16px 8px;
  color: ${({ theme }) => theme.colors.blue[300]};
  border: 2px solid currentColor;
  border-radius: 38px;
`
const Icon = styled.div`
  flex-shrink: 0;
`
const Textfield = styled.input`
  flex: 1;
  display: block;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  color: inherit;
  min-width: 0;

  :focus {
    color: ${({ theme }) => theme.colors.slate[600]};
  }
  ::placeholder {
      color: currentColor;
      opacity: 1;
  }
`
const CloseButton = styled.button`
  appearance: none;
  border: none;
  outline: none;
  background: none;
  color: inherit;
  cursor: pointer;
`

type Props = InputHTMLAttributes<HTMLInputElement> & {
  onSubmit: FormEventHandler
  onClose: (val: boolean) => void | SetStateAction<boolean>
}

const SearchField = ({ onSubmit, onClose, ...props }: Props) => {
  return (
    <Container onSubmit={onSubmit}>
      <Icon>
        <SearchIcon/>
      </Icon>
      <Textfield type="text" name="search" placeholder="Search..." {...props} />
      <CloseButton type="button" onClick={() => onClose(false)}>Close</CloseButton>
    </Container>
  )
}

export default SearchField
