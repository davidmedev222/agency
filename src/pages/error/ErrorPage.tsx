import { Error } from '@/components'

const ErrorPage = (): JSX.Element => {
  return (
    <main>
      <Error code='404' message='Page Not Found' to='/' />
    </main>
  )
}

export { ErrorPage }
