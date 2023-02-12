import { ReactNode } from "react"
import styled from "styled-components"

import Text from "@/components/Text"

const Container = styled.section`
  :not(:first-child) {
    margin-top: 40px;
  }
`
const Headline = styled(Text)`
  padding: 16px 20px;
`

type SectionProps = {
  title: string
  children: ReactNode
}
const Section = ({ title, children }: SectionProps) => {
  return (
    <Container>
      <Headline variant="md-bold">{title}</Headline>
      {children}
    </Container>
  )
}

export default Section
