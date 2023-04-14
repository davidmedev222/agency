import { IconStar } from '@/components'
import { useIntersectionObserver } from '@/hooks'
import styled from 'styled-components'

const ServicesItemStyled = styled('li')`
  display: flex;
  flex-flow: column nowrap;
  gap: clamp(1rem, 2vw, 4rem);

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
  animationDelay: number
}

const ServicesItem = ({ title, description, animationDelay }: Props): JSX.Element => {
  const [ref1, isIntersecting1] = useIntersectionObserver({
    threshold: 0.5
  }, true)

  return (
    <ServicesItemStyled ref={ref1} data-opacity data-fade-bottom={isIntersecting1} data-delay={animationDelay}>
      <IconStar />
      <ServicesItemTitle>{title}</ServicesItemTitle>
      <ServicesItemDescription>{description}</ServicesItemDescription>
    </ServicesItemStyled>

  )
}

export { ServicesItem }
