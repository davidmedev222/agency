import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<main>layout</main>}>
          <Route index element={<main>home</main>} />
          <Route path='project/:name' element={<main>project</main>} />
          <Route path='*' element={<main>error 404</main>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { App }
