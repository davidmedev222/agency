import styled from 'styled-components'

const Heading = styled('h2')`
  font-size: clamp(3rem, 4.5vw, 9rem);
  position: sticky;
  top: 15%;

 @media screen and (max-width: 49.75rem) {
    position: static;
 }
`

export { Heading }
