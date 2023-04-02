import { useGlobalProvider } from '@/hooks'
import { Heading } from '@/styles-components'
import { ServicesItem } from '@/components'
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

  const listOfServices = services.items.map((service) => {
    const { id, description, title } = service
    return <ServicesItem key={id} description={description} title={title} />
  })

  return (
    <ServicesStyled>
      <Heading as='h3'>{services.title}</Heading>
      <ServicesList>
        {listOfServices}
      </ServicesList>
    </ServicesStyled>
  )
}

export { Services }
