import { ErrorPage, HomePage, LayoutPages } from '@/pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const RoutesProvider = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutPages />}>
          <Route index element={<HomePage />} />
          <Route path='project/:name' element={<main>project</main>} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { RoutesProvider }
