import styled from 'styled-components'

const CareersItemStyled = styled('li')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
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
}

const CareersItem = ({ job, country }: Props): JSX.Element => {
  return (
    <CareersItemStyled>
      <CareersItemJob>{job}</CareersItemJob>
      <CareersItemCountry>{country}</CareersItemCountry>
    </CareersItemStyled>
  )
}

export { CareersItem }
