import { Project } from '@/models/project.models'
import { Hero, Video } from '@/pages/project/components'

interface Props {
  project: Project
}

const ProjectWrapper = ({ project }: Props): JSX.Element => {
  const { title, category, description, videoURL } = project

  return (
    <>
      <Hero title={title} category={category} description={description} />
      <Video videoURL={videoURL} autoplay muted loop />
    </>
  )
}

export { ProjectWrapper }
