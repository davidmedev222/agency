import { useGlobalProvider, useIntersectionObserver } from '@/hooks'
import { Heading } from '@/styles-components'
import styled from 'styled-components'

const AboutStyled = styled('section')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-start;

 @media screen and (max-width: 49.75rem) {
    grid-template-columns: 1fr;
    gap: 3rem;
 }
`
const AboutDescription = styled('p')`
  color: var(--text-two);
  font-size: clamp(1rem, 1.25vw, 2.5rem);
`

const About = (): JSX.Element => {
  const { about } = useGlobalProvider()
  const [ref1, isIntersecting1] = useIntersectionObserver({
    threshold: 0.5
  }, true)

  return (
    <AboutStyled ref={ref1}>
      <Heading as='h4' data-opacity data-fade-bottom={isIntersecting1} data-delay='100'>{about.title}</Heading>
      <AboutDescription data-opacity data-fade-bottom={isIntersecting1} data-delay='200'>{about.description}</AboutDescription>
    </AboutStyled>
  )
}

export { About }
