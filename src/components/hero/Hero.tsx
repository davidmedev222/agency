import { HeroProject } from '@/components'
import { useGlobalProvider } from '@/hooks'
import styled from 'styled-components'

const HeroStyled = styled('section')`
  display: grid;
  grid-template: 
  "heading paragraph"
  "projects projects"
  / 1fr 1fr;
  align-items: center;
  gap: clamp(2.5rem, 10vw, 20rem) 0;

 @media screen and (max-width: 64rem) {
    grid-template: 
    "heading"
    "paragraph"
    "projects"
    / 1fr;
 }
`
const HeroHeading = styled('h1')`
  font-size: clamp(3.75rem, 7.25vw, 14.5rem);
`
const HeroParagraph = styled('p')`
  font-size: clamp(1.25rem, 1.75vw, 3.5rem);
  
  @media screen and (max-width: 49.75rem) {
    padding: 0 0 6rem 0;
  }
`
const HeroProjects = styled('section')`
  grid-area: projects;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(1.5rem, 2vw, 4rem);

 @media screen and (max-width: 64rem) {
    grid-template-columns: 1fr;
 }
`

const Hero = (): JSX.Element => {
  const { hero } = useGlobalProvider()

  const projects = hero.projects.map((project) => {
    const { id, image, category, title, to } = project
    return <HeroProject key={id} image={image} category={category} title={title} to={to} />
  })

  return (
    <HeroStyled>
      <HeroHeading>{hero.title}</HeroHeading>
      <HeroParagraph>{hero.description}</HeroParagraph>
      <HeroProjects>{projects}</HeroProjects>
    </HeroStyled>
  )
}

export { Hero }
