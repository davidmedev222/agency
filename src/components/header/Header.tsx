import { IconArrowRight, IconStar } from '@/components'
import { useGlobalProvider } from '@/hooks'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderStyled = styled('header')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background-one);

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

  & svg {
    width: clamp(1.25rem, 1.5vw, 2rem);
    transform: rotate(-45deg);
  }
`

const Header = (): JSX.Element => {
  const { header } = useGlobalProvider()

  return (
    <HeaderStyled>
      <IconStar />
      <HeadingRedirect to='mailto:davidmedev@gmail.com'>
        {header.email}
        <IconArrowRight />
      </HeadingRedirect>
    </HeaderStyled>
  )
}

export { Header }
