import styled from 'styled-components'

const TestimonyStyled = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  gap: clamp(1.875rem, 2.25vw, 4.5rem);
  background-color: #ffffff19;
  padding: clamp(5rem, 9.5vw, 19rem) clamp(1rem, 12.5vw, 25rem);

 @media screen and (max-width: 49.75rem) {
    padding: 3rem 1rem;
 }
`
const TestimonyComment = styled('p')`
  font-size: clamp(1.25rem, 1.625vw, 3.25rem);
`
const TestimonyDetail = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: clamp(1.25rem, 1.25vw, 2.5rem);
`
const TestimonyImage = styled('img')`
  width: clamp(4rem, 4vw, 8rem);
  aspect-ratio: 1;
`
const TestimonyName = styled('h4')`
  font-size: clamp(1.125rem, 1.125vw, 2.25rem);
  display: flex;
  flex-flow: column nowrap;
  gap: clamp(0.5rem, 0.5vw, 1rem);
`
const TestimonyJob = styled('span')`
  color: var(--text-two);
`

interface Props {
  comment: string
  name: string
  photoURL: string
  job: string
}

const Testimony = ({ comment, photoURL, name, job }: Props): JSX.Element => {
  return (
    <TestimonyStyled>
      <TestimonyComment>{comment}</TestimonyComment>
      <TestimonyDetail>
        <TestimonyImage src={photoURL} alt={name} loading='lazy' />
        <TestimonyName>
          {name}
          <TestimonyJob>{job}</TestimonyJob>
        </TestimonyName>
      </TestimonyDetail>
    </TestimonyStyled>
  )
}

export { Testimony }
