import { IGlobalContext } from '@/models'
import { createContext } from 'react'

const GlobalContext = createContext<IGlobalContext>({
  header: {
    email: ''
  },
  hero: {
    title: '',
    description: '',
    projects: [{ id: 1, image: '', title: '', category: '', to: '' }]
  },
  clients: {
    title: ''
  },
  services: {
    title: '',
    items: [{ id: 1, title: '', description: '' }]
  },
  careers: {
    title: '',
    items: [{ id: 1, job: '', country: '' }]
  },
  about: {
    title: '',
    description: ''
  },
  footer: {
    copyright: ''
  }
})

export { GlobalContext }
