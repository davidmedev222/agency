import { GlobalContext } from '@/context'
import { IGlobalContext } from '@/models'
import { useContext } from 'react'

const useGlobalProvider = (): IGlobalContext => {
  const context = useContext(GlobalContext)
  return context
}

export { useGlobalProvider }
