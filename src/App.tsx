import { RoutesProvider } from '@/routes'
import { StylesProvider } from '@/styles'

const App = (): JSX.Element => {
  return (
    <>
      <StylesProvider />
      <RoutesProvider />
    </>
  )
}

export { App }
