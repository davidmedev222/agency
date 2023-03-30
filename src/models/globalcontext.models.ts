interface IGlobalContextHeader {
  email: string
}

interface IGlobalContextHeroProject {
  id: number
  image: string
  title: string
  category: string
  to: string
}

interface IGlobalContextHero {
  title: string
  description: string
  projects: IGlobalContextHeroProject[]
}

interface IGlobalContextClients {
  title: string
}

interface IGlobalContextServicesItem {
  id: number
  title: string
  description: string
}

interface IGlobalContextServices {
  title: string
  items: IGlobalContextServicesItem[]
}

interface IGlobalContextAbout {
  title: string
  description: string
}

interface IGlobalContextCareersItem {
  id: number
  job: string
  country: string
}

interface IGlobalContextCareers {
  title: string
  items: IGlobalContextCareersItem[]
}

interface IGlobalContextFooter {
  copyright: string
}

export interface IGlobalContext {
  header: IGlobalContextHeader
  hero: IGlobalContextHero
  clients: IGlobalContextClients
  services: IGlobalContextServices
  about: IGlobalContextAbout
  careers: IGlobalContextCareers
  footer: IGlobalContextFooter
}
