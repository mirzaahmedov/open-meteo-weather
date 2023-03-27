import { ReactNode } from 'react';
import styled,{ keyframes } from 'styled-components'

type Props = {
  width?: number;
  height?: number;
  borderRadius?: number;
}

const animation = keyframes`
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 200% 0;
  }
`

const Base = styled.div<Props>`
  width: ${props => props.width ? props.width + "px" : "auto"};
  height: ${props => props.height ? props.height + "px" : "1.5rem"}};
  background-image: linear-gradient( 90deg, transparent, ${({ theme }) => theme.colors.blue[400]}, transparent);
  background-size: 300% 100%;
  border-radius: ${props => props.borderRadius || 10}px;
  animation: ${animation} 2s ease-in-out infinite;
`
const Skeleton = (props: Props) => {
  return (
    <Base {...props}/>
  )
}

type ListProps = {
  count: number;
  padding?: number;
  gap?: number;
  children: ReactNode
  vertical?: boolean;
}
const ListContainer = styled.div<Omit<ListProps, "children"|"count">>`
  display: flex;
  flex-direction: ${props => props.vertical ? "column" : "row"};
  gap: ${props => props.gap}px;
`
const List = ({ children, count, gap, vertical = false }: ListProps) => {
  return (
    <ListContainer gap={gap} vertical={vertical}>
      {Array.from({ length: count }, () => 
        children
      )}
    </ListContainer>
  )
}

Skeleton.List = List

export default Skeleton
