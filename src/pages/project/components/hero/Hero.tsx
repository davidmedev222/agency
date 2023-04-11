import styled from 'styled-components'

const HeroStyled = styled('section')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(1rem, 1vw, 2rem);
  word-break: break-all;

 @media screen and (max-width: 64rem) {
    grid-template-columns: 1fr;
    gap: 3.75rem;
 }
`
const HeroHeading = styled('h2')`
  font-size: clamp(3.75rem, 7.25vw, 14.5rem);
`
const HeroInfo = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  gap: clamp(1.25rem, 2vw, 4rem);
  color: var(--text-two);
`
const HeroCategory = styled('span')`
  font-size: clamp(1.125rem, 1.125vw, 2.25rem);
`
const HeroDescription = styled('p')`
  font-size: clamp(1.25rem, 1.625vw, 3.25rem);
`

interface Props {
  title: string
  category: string
  description: string
}

const Hero = ({ title, category, description }: Props): JSX.Element => {
  return (
    <HeroStyled>
      <HeroHeading>{title}</HeroHeading>
      <HeroInfo>
        <HeroCategory>{category}</HeroCategory>
        <HeroDescription>{description}</HeroDescription>
      </HeroInfo>
    </HeroStyled>
  )
}

export { Hero }
