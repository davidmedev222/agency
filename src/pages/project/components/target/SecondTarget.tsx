import { ProjectPhotoURL } from '@/models/project.models'
import styled from 'styled-components'

const SecondTargetStyled = styled('section')`
  display: grid;
  grid-template: "heading description" auto "images images" auto / 1fr 1fr;
  gap: clamp(3.75rem, 7.5vw, 15rem);

 @media screen and (max-width: 49.75rem) {
    grid-template: "heading" auto "description" auto "images" auto / 1fr;
 }
`
const SecondTargetHeading = styled('h5')`
  font-size: clamp(2rem, 2vw, 4rem);
`
const SecondTargetDescription = styled('p')`
  color: var(--text-two);
  font-size: clamp(1.25rem, 1.25vw, 2.5rem);
`
const WrapperImages = styled('div')`
  grid-area: images;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

 @media screen and (max-width: 49.75rem) {
    grid-template-columns: 1fr;
 }
`
const SecondTargetImage = styled('img')`
  aspect-ratio: 1;
`

interface Props {
  title: string
  description: string
  images: ProjectPhotoURL[]
}

const SecondTarget = ({ title, description, images }: Props): JSX.Element => {
  return (
    <SecondTargetStyled>
      <SecondTargetHeading>{title}</SecondTargetHeading>
      <SecondTargetDescription>{description}</SecondTargetDescription>
      <WrapperImages>
        {images.map((image) => <SecondTargetImage key={image.id} src={image.url} alt={image.alt} loading='lazy' />)}
      </WrapperImages>
    </SecondTargetStyled>
  )
}

export { SecondTarget }
