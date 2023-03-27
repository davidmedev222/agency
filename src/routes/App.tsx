import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LayoutPages, HomePage, ErrorPage } from '../pages/export'

const App = (): JSX.Element => {
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

export { App }
