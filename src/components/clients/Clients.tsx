import { IconCoinbase, IconDropbox, IconSpotify, IconWebFlow } from '@/components'
import { useGlobalProvider, useIntersectionObserver } from '@/hooks'
import { Heading } from '@/styles-components'
import styled from 'styled-components'

const ClientsStyled = styled('section')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-start;
  
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
    fill: var(--i-component-one);
    width: clamp(10rem, 12.5vw, 25rem);
  }
`

const Clients = (): JSX.Element => {
  const { clients } = useGlobalProvider()

  const [ref1, isIntersecting1] = useIntersectionObserver({
    threshold: 0.5
  }, true)

  return (
    <ClientsStyled ref={ref1}>
      <Heading data-opacity data-fade-bottom={isIntersecting1} data-delay='100'>{clients.title}</Heading>
      <WrapperIcons>
        <IconCoinbase data-opacity data-fade-bottom={isIntersecting1} data-delay='200' />
        <IconDropbox data-opacity data-fade-bottom={isIntersecting1} data-delay='400' />
        <IconSpotify data-opacity data-fade-bottom={isIntersecting1} data-delay='600' />
        <IconWebFlow data-opacity data-fade-bottom={isIntersecting1} data-delay='900' />
      </WrapperIcons>
    </ClientsStyled>
  )
}

export { Clients }
