import { ProjectWrapper } from '@/pages/project/components'
import { projects } from '@/services'
import { useParams } from 'react-router-dom'

const ProjectPage = (): JSX.Element => {
  const { name } = useParams()
  const foundProject = projects.filter((project) => project.title.toLowerCase() === name)
  const project = foundProject[0]

  return (
    <main>
      {foundProject.length > 0 ? <ProjectWrapper project={project} /> : 'page not found'}
    </main>
  )
}

export { ProjectPage }
