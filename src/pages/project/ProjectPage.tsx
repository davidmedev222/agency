import { Error } from '@/components'
import { ProjectWrapper } from '@/pages/project/components'
import { projects } from '@/services'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const ProjectPageStyled = styled('main')`
  display: grid;
  gap: clamp(5rem, 10vw, 20rem);
`

const ProjectPage = (): JSX.Element => {
  const { name } = useParams()
  const foundProject = projects.filter((project) => project.tag === name)
  const project = foundProject[0]

  return (
    <ProjectPageStyled>
      {foundProject.length > 0
        ? <ProjectWrapper project={project} />
        : <Error code='404' message='Page Not Found' to='/' />}
    </ProjectPageStyled>
  )
}

export { ProjectPage }
