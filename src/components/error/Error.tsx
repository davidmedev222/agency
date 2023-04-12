import { IconArrowLeftLong } from '@/components'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ErrorStyled = styled('section')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`
const ErrorHeading = styled('h2')`
  font-size:  clamp(8rem, 8.5vw, 17rem);
`
const ErrorMessage = styled('h3')`
  font-size: clamp(1.25rem, 1.5vw, 3rem);
`
const ErrorLink = styled(Link)`
  margin: clamp(2.5rem, 3vw, 6rem) 0 0 0;
  border-radius: clamp(3rem, 3vw, 6rem);
  background-color: white;
  padding: clamp(0.25rem, 0.5vw, 1rem) clamp(5rem, 5vw, 10rem);

  svg {
    fill: black;
    width: clamp(2. 5rem, 2.5vw, 5rem);
    height: clamp(2.5rem, 2.5vw, 5rem);
  }
`

interface Props {
  to: string
  message: string
  code: string
}

const Error = ({ code, message, to }: Props): JSX.Element => {
  return (
    <ErrorStyled>
      <ErrorHeading>{code}</ErrorHeading>
      <ErrorMessage>{message}</ErrorMessage>
      <ErrorLink to={to}>
        <IconArrowLeftLong />
      </ErrorLink>
    </ErrorStyled>
  )
}

export { Error }
