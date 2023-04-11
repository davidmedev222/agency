import { ProjectPhotoURL } from '@/models/project.models'
import styled from 'styled-components'

const FirstTargetStyled = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-start;
  gap: clamp(1rem, 1vw, 2rem);

 @media screen and (max-width: 49.75rem) {
    grid-template-columns: 1fr;
    gap: 3.75rem;
 }
`
const WrapperText = styled('div')`
  position: sticky;
  top: 20%;
  display: flex;
  flex-flow: column nowrap;
  gap: clamp(1.75rem, 2.25vw, 4.5rem);

 @media screen and (max-width: 49.75rem) {
    position: static;
 }
`
const FirstTargetHeading = styled('h3')`
  font-size: clamp(2rem, 2vw, 4rem);
`
const FirstTargetDescription = styled('p')`
  color: var(--text-two);
  font-size: clamp(1.25rem, 1.625vw, 3.25rem);
`
const WrapperImages = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  gap: clamp(1.875rem, 1.875vw, 3.75rem);
`
const FirstTargetImage = styled('img')`
  aspect-ratio: 1;
`

interface Props {
  title: string
  description: string
  images: ProjectPhotoURL[]
}

const FirstTarget = ({ title, description, images }: Props): JSX.Element => {
  return (
    <FirstTargetStyled>
      <WrapperText>
        <FirstTargetHeading>{title}</FirstTargetHeading>
        <FirstTargetDescription>{description}</FirstTargetDescription>
      </WrapperText>
      <WrapperImages>
        {images.map((image) => {
          return (
            <FirstTargetImage key={image.id} src={image.url} alt={image.alt} loading='lazy' />
          )
        })}
      </WrapperImages>
    </FirstTargetStyled>
  )
}

export { FirstTarget }
