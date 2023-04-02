import { GlobalProvider } from '@/context'
import { RoutesProvider } from '@/routes'
import { StylesProvider } from '@/styles-components'

const App = (): JSX.Element => {
  return (
    <GlobalProvider>
      <StylesProvider />
      <RoutesProvider />
    </GlobalProvider>
  )
}

export { App }
