import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeroProjectStyled = styled('article')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  gap: clamp(1rem, 1vw, 2rem);
`
const HeroProjectRedirect = styled(Link)`
  width: 100%;
`
const HeroProjectImage = styled('img')`
  aspect-ratio: 1;
`
const HeroProjectTitle = styled('h2')`
  font-size: clamp(1.25rem, 1.25vw, 2.5rem);
`
const HeroProjectCategory = styled('h3')`
  color: var(--text-two);
  font-size: clamp(1rem, 1vw, 2rem);
`

interface Props {
  image: string
  category: string
  title: string
  to: string
}

const HeroProject = ({ to, image, title, category }: Props): JSX.Element => {
  return (
    <HeroProjectStyled>
      <HeroProjectRedirect to={`/project/${to}`}><HeroProjectImage src={image} alt={title} /></HeroProjectRedirect>
      <HeroProjectTitle>{title}</HeroProjectTitle>
      <HeroProjectCategory>{category}</HeroProjectCategory>
    </HeroProjectStyled>
  )
}

export { HeroProject }
