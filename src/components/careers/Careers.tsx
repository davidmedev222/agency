import { CareersItem } from '@/components'
import { useGlobalProvider } from '@/hooks'
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

  const listOfCareers = careers.items.map((career) => {
    const { id, country, job } = career
    return <CareersItem key={id} country={country} job={job} />
  })

  return (
    <CareersStyled>
      <Heading as='h5'>{careers.title}</Heading>
      <CareersList>
        {listOfCareers}
      </CareersList>
    </CareersStyled>
  )
}

export { Careers }
