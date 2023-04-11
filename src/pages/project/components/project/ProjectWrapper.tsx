import { Project } from '@/models/project.models'
import { Hero } from '@/pages/project/components'

interface Props {
  project: Project
}

const ProjectWrapper = ({ project }: Props): JSX.Element => {
  const { title, category, description } = project

  return (
    <Hero title={title} category={category} description={description} />
  )
}

export { ProjectWrapper }
