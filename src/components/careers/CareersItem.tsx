import { useIntersectionObserver } from '@/hooks'
import styled from 'styled-components'

const CareersItemStyled = styled('li')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  transition: color 250ms;

  :hover {
    color: var(--text-two);
  }
`
const CareersItemJob = styled('h6')`
  font-size: clamp(1.25rem, 1.5vw, 3rem);
`
const CareersItemCountry = styled('h6')`
  color: var(--text-two);
  font-size: clamp(1rem, 1.25vw, 2.5rem);
`

interface Props {
  job: string
  country: string
  animationDelay: number
}

const CareersItem = ({ job, country, animationDelay }: Props): JSX.Element => {
  const [ref1, isIntersecting1] = useIntersectionObserver({
    threshold: 0.5
  }, true)

  return (
    <CareersItemStyled ref={ref1} data-opacity data-fade-bottom={isIntersecting1} data-delay={animationDelay}>
      <CareersItemJob>{job}</CareersItemJob>
      <CareersItemCountry>{country}</CareersItemCountry>
    </CareersItemStyled>
  )
}

export { CareersItem }
