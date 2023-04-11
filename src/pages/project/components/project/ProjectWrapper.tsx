import { Project } from '@/models/project.models'
import { FirstTarget, Hero, SecondTarget, Testimony, Video } from '@/pages/project/components'

interface Props {
  project: Project
}

const ProjectWrapper = ({ project }: Props): JSX.Element => {
  const {
    title,
    category,
    description,
    videoURL,
    firstTitleTarget,
    firstDescriptionTarget,
    firstPhotosURL,
    testimony,
    secondTitleTarget,
    secondDescriptionTarget,
    secondPhotosURL
  } = project

  return (
    <>
      <Hero title={title} category={category} description={description} />
      <Video videoURL={videoURL} autoplay muted loop />
      <FirstTarget title={firstTitleTarget} description={firstDescriptionTarget} images={firstPhotosURL} />
      <Testimony {...testimony} />
      <SecondTarget title={secondTitleTarget} description={secondDescriptionTarget} images={secondPhotosURL} />
    </>
  )
}

export { ProjectWrapper }
