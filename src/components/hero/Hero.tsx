import { HeroProject } from '@/components'
import { useGlobalProvider, useIntersectionObserver } from '@/hooks'
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
  gap: clamp(3rem, 3.5vw, 7rem) clamp(2rem, 2vw, 4rem);

 @media screen and (max-width: 64rem) {
    grid-template-columns: 1fr;
 }
`

const Hero = (): JSX.Element => {
  const { hero } = useGlobalProvider()

  const [ref1, isIntersecting1] = useIntersectionObserver({
    threshold: 0
  }, true)
  const [ref2, isIntersecting2] = useIntersectionObserver({
    threshold: 0.1
  }, true)

  const projects = hero.projects.map((project) => {
    const { id, image, category, title, to } = project
    return <HeroProject key={id} image={image} category={category} title={title} to={to} />
  })

  return (
    <HeroStyled ref={ref1}>
      <HeroHeading data-opacity data-fade-bottom={isIntersecting1} data-delay='100'>{hero.title}</HeroHeading>
      <HeroParagraph data-opacity data-fade-bottom={isIntersecting1} data-delay='150'>{hero.description}</HeroParagraph>
      <HeroProjects ref={ref2} data-opacity data-fade-bottom={isIntersecting2} data-delay='100'>{projects}</HeroProjects>
    </HeroStyled>
  )
}

export { Hero }
