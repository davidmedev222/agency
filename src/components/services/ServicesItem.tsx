import { IconStar } from '@/components'
import styled from 'styled-components'

const ServicesItemStyled = styled('li')`
  display: flex;
  flex-flow: column nowrap;
  gap: clamp(2rem, 2vw, 4rem);

  svg {
    fill: var(--i-component-one);
    width: clamp(1rem, 2vw, 4rem);
  }
`
const ServicesItemTitle = styled('h4')`
  font-size: clamp(1.25rem, 1.5vw, 3rem);
`
const ServicesItemDescription = styled('p')`
  color: var(--text-two);
  font-size: clamp(1rem, 1.25vw, 2.5rem);
`

interface Props {
  title: string
  description: string
}

const ServicesItem = ({ title, description }: Props): JSX.Element => {
  return (
    <ServicesItemStyled>
      <IconStar />
      <ServicesItemTitle>{title}</ServicesItemTitle>
      <ServicesItemDescription>{description}</ServicesItemDescription>
    </ServicesItemStyled>

  )
}

export { ServicesItem }
