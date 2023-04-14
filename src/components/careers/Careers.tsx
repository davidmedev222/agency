import { CareersItem } from '@/components'
import { useGlobalProvider, useIntersectionObserver } from '@/hooks'
import { Heading } from '@/styles-components'
import styled from 'styled-components'

const CareersStyled = styled('section')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-start;
  
  @media screen and (max-width: 49.75rem) {
    grid-template-columns: 1fr;
    gap: 3rem;
 }
`
const CareersList = styled('ul')`
  display: flex;
  flex-flow: column nowrap;
  gap: clamp(2.5rem, 2.5vw, 5rem);
`

const Careers = (): JSX.Element => {
  const { careers } = useGlobalProvider()
  const [ref1, isIntersecting1] = useIntersectionObserver({
    threshold: 0.5
  }, true)

  const listOfCareers = careers.items.map((career, index) => {
    const { id, country, job } = career
    const delay = 200 * (index + 1)
    return <CareersItem key={id} country={country} job={job} animationDelay={delay} />
  })

  return (
    <CareersStyled>
      <Heading as='h5' ref={ref1} data-opacity data-fade-bottom={isIntersecting1} data-delay='100'>{careers.title}</Heading>
      <CareersList>
        {listOfCareers}
      </CareersList>
    </CareersStyled>
  )
}

export { Careers }
