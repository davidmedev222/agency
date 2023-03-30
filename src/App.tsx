import { GlobalProvider } from '@/context'
import { RoutesProvider } from '@/routes'
import { StylesProvider } from '@/styles'

const App = (): JSX.Element => {
  return (
    <GlobalProvider>
      <StylesProvider />
      <RoutesProvider />
    </GlobalProvider>
  )
}

export { App }
