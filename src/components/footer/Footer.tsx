import { IconStar } from '@/components'
import { useGlobalProvider } from '@/hooks'
import styled from 'styled-components'

const FooterStyled = styled('footer')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  & svg {
    width: clamp(1.5rem, 2vw, 4rem);
    fill: var(--i-component-one);
  }
`

const FooterCopyright = styled('h6')`
  font-size: clamp(1.25rem, 1.25vw, 2.5rem);
`

const Footer = (): JSX.Element => {
  const { footer } = useGlobalProvider()

  return (
    <FooterStyled>
      <IconStar />
      <FooterCopyright>{footer.copyright}</FooterCopyright>
    </FooterStyled>
  )
}

export { Footer }
