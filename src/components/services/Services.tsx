import { ServicesItem } from '@/components'
import { useGlobalProvider, useIntersectionObserver } from '@/hooks'
import { Heading } from '@/styles-components'
import styled from 'styled-components'

const ServicesStyled = styled('section')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-start;

 @media screen and (max-width: 49.75rem) {
    grid-template-columns: 1fr;
    gap: 3rem;
 }
`
const ServicesList = styled('ul')`
  display: flex;
  flex-flow: column nowrap;
  gap: clamp(3.75rem, 3.75vw, 7.5rem);
`

const Services = (): JSX.Element => {
  const { services } = useGlobalProvider()

  const [ref1, isIntersecting1] = useIntersectionObserver({
    threshold: 0.5
  }, true)

  const listOfServices = services.items.map((service, index) => {
    const { id, description, title } = service
    const delay = 200 * (index + 1)
    return <ServicesItem key={id} description={description} title={title} animationDelay={delay} />
  })

  return (
    <ServicesStyled>
      <Heading as='h3' ref={ref1} data-opacity data-fade-bottom={isIntersecting1} data-delay='100'>{services.title}</Heading>
      <ServicesList>
        {listOfServices}
      </ServicesList>
    </ServicesStyled>
  )
}

export { Services }
