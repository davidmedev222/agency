import { IconCoinbase, IconDropbox, IconSpotify, IconWebFlow } from '@/components'
import { useGlobalProvider } from '@/hooks'
import { Heading } from '@/styles-components'
import styled from 'styled-components'

const ClientsStyled = styled('section')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  
  @media screen and (max-width: 49.75rem) {
    grid-template-columns: 1fr;
    gap: 3rem;
 }
`

const WrapperIcons = styled('div')`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: clamp(2rem, 3.75vw, 7.5rem) clamp(2rem, 7.5vw, 15rem) ;

  & svg {
    fill: white;
    width: clamp(6.25rem, 12.5vw, 25rem);
  }
`

const Clients = (): JSX.Element => {
  const { clients } = useGlobalProvider()

  return (
    <ClientsStyled>
      <Heading>{clients.title}</Heading>
      <WrapperIcons>
        <IconCoinbase />
        <IconDropbox />
        <IconSpotify />
        <IconWebFlow />
      </WrapperIcons>
    </ClientsStyled>
  )
}

export { Clients }
