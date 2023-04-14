import { IconArrowRight, IconStar } from '@/components'
import { useGlobalProvider, useIntersectionObserver } from '@/hooks'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderStyled = styled('header')`
  position: sticky;
  top: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background-one);
  z-index: 1;

  & svg {
    width: clamp(1.5rem, 2vw, 4rem);
    fill: var(--i-component-one);
  }
`
const HeadingRedirect = styled(Link)`
  font-size: clamp(1.25rem, 1.25vw, 2.5rem);
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: .5rem;
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

const Header = (): JSX.Element => {
  const { header } = useGlobalProvider()

  const [ref1, isIntersecting1] = useIntersectionObserver({
    threshold: 0.5
  }, true)

  return (
    <HeaderStyled ref={ref1} data-opacity data-fade-opacity={isIntersecting1}>
      <IconStar />
      <HeadingRedirect to='mailto:davidmedev@gmail.com'>
        {header.email}
        <IconArrowRight />
      </HeadingRedirect>
    </HeaderStyled>
  )
}

export { Header }
