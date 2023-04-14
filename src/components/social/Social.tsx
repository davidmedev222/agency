import { IconArrowRight } from '@/components'
import { useGlobalProvider, useIntersectionObserver } from '@/hooks'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SocialStyled = styled('section')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

 @media screen and (max-width: 49.75rem) {
    grid-template-columns: 1fr;
    gap: 3rem;
 }
`
const SocialEmail = styled(Link)`
  font-size: clamp(1.5rem, 2.5vw, 5rem);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: clamp(.5rem, .5vw, 1rem);
  transition: color 250ms;

  & svg {
    fill: var(--i-component-one);
    width: clamp(1.25rem, 1.5vw, 2rem);
    transform: rotate(-45deg);
    transition: fill 250ms;
  }

  :hover {
    color: var(--text-one-hover);
    --i-component-one: var(--text-one-hover);
  }
`
const SocialList = styled('div')`
  display: flex;
  flex-flow: row wrap;
  gap: clamp(2rem, 2vw, 4rem) 0;
`
const SocialNetworkRedirect = styled(Link)`
  font-size: clamp(1rem, 2vw, 4rem);
  flex-basis: 50%;
  transition: color 250ms;

  :hover {
    color: var(--text-one-hover);
  }
`

const Social = (): JSX.Element => {
  const { social } = useGlobalProvider()
  const [ref1, isIntersecting1] = useIntersectionObserver({
    threshold: 0.5
  }, true)

  return (
    <SocialStyled ref={ref1}>
      <SocialEmail to='mailto:davidmedev@gmail.com' data-opacity data-fade-bottom={isIntersecting1} data-delay='100'>{social.email}<IconArrowRight />
      </SocialEmail>
      <SocialList>
        {social.networks.map((network, index) => {
          const { id, social, to } = network
          const delay = 200 * (index + 1)
          return <SocialNetworkRedirect key={id} to={to} data-opacity data-fade-bottom={isIntersecting1} data-delay={delay}>{social}</SocialNetworkRedirect>
        })}
      </SocialList>
    </SocialStyled>
  )
}

export { Social }
