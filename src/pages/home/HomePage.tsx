import { Clients, Hero, Services } from '@/components'
import styled from 'styled-components'

const MainStyled = styled('main')`
  display: grid;
  gap: clamp(12.5rem, 15vw, 30rem);
`

const HomePage = (): JSX.Element => {
  return (
    <MainStyled>
      <Hero />
      <Clients />
      <Services />
    </MainStyled>
  )
}

export { HomePage }
