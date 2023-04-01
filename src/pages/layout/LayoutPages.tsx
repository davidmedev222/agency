import { Header } from '@/components'
import { Outlet } from 'react-router-dom'

const LayoutPages = (): JSX.Element => {
  return (
    <>
      <Header />
      <Outlet />
      <footer>footer</footer>
    </>
  )
}

export { LayoutPages }
