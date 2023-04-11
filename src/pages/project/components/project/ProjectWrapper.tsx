import { Project } from '@/models/project.models'
import { FirstTarget, Hero, Video } from '@/pages/project/components'

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
    firstPhotosURL
  } = project

  return (
    <>
      <Hero title={title} category={category} description={description} />
      <Video videoURL={videoURL} autoplay muted loop />
      <FirstTarget title={firstTitleTarget} description={firstDescriptionTarget} images={firstPhotosURL} />
    </>
  )
}

export { ProjectWrapper }
