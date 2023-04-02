import { GlobalContext } from '@/context'
import { IGlobalContext } from '@/models'

interface Props {
  children: React.ReactNode
}

const GlobalProvider = ({ children }: Props): JSX.Element => {
  const data: IGlobalContext = {
    header: {
      email: 'agency@email.com'
    },
    hero: {
      title: 'Agency',
      description: 'We’re an award winning design agency specialised in art direction, 3D, visual identity and web design.',
      projects: [
        {
          id: 1,
          image: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1680190994/devagency/images/hero-project-1_xcbsif.png',
          title: 'Sofia',
          category: 'Web Design - Branding',
          to: 'sofia'
        },
        {
          id: 2,
          image: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1680190994/devagency/images/hero-project-2_unswng.png',
          title: 'Scentia',
          category: 'Art Direction - 3D',
          to: 'scentia'
        },
        {
          id: 3,
          image: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1680190994/devagency/images/hero-project-3_xshjev.png',
          title: 'Yogo',
          category: 'Web Design - 3D',
          to: 'yogo'
        },
        {
          id: 4,
          image: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1680190994/devagency/images/hero-project-4_ftq9dn.png',
          title: 'Fin',
          category: 'Art Direction',
          to: 'fin'
        },
        {
          id: 5,
          image: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1680190994/devagency/images/hero-project-5_vwdamb.png',
          title: 'M&P',
          category: 'Art Direction - Branding - 3D',
          to: 'm&p'
        },
        {
          id: 6,
          image: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1680190995/devagency/images/hero-project-6_t69rgp.png',
          title: 'Sen Bros',
          category: 'Branding - 3D',
          to: 'sen-bros'
        }
      ]
    },
    clients: {
      title: 'Clients'
    },
    services: {
      title: 'Services',
      items: [
        {
          id: 1,
          title: 'Art Direction',
          description: 'We help with the creation and development of online advertising ideas, with particular focus on their visual appearance.'
        },
        {
          id: 2,
          title: 'Branding',
          description: 'We design key brand elements such as the logo, color scheme, typography, and other design components that makes your brand stand out from competitors.'
        },
        {
          id: 3,
          title: 'Web Desing',
          description: 'We build and optimize your online presence.  Website is the digital entry point into your business and a powerful revenue channel.'
        },
        {
          id: 4,
          title: '3D Desing',
          description: 'We combine creative design and technical skills to build striking 3D visualisations that bring your project to life.'
        }
      ]
    },
    about: {
      title: 'About',
      description: 'We are a small team of innovators, designers, artists, and creators, who are exploring visual ways to convey ideas. We are focusing on the intersection of artistic exploration and design — specialised in art direction, visual identity, 3D and web design.'
    },
    careers: {
      title: 'Careers',
      items: [
        {
          id: 1,
          job: 'Project Manager',
          country: 'Amsterdam'
        },
        {
          id: 2,
          job: 'Brand Designer',
          country: 'Remote'
        },
        {
          id: 3,
          job: 'Frontend Developer',
          country: 'Remote'
        },
        {
          id: 4,
          job: 'Designer UI',
          country: 'Spain'
        }
      ]
    },
    social: {
      email: 'agency@gmail.com',
      networks: [
        {
          id: 1,
          social: 'Instagram',
          to: 'https://www.instagram.com/davidmedev/'
        },
        {
          id: 2,
          social: 'Linkedin',
          to: 'https://www.linkedin.com/in/davidmedev/'
        },
        {
          id: 3,
          social: 'Behance',
          to: 'https://www.behance.net/'
        },
        {
          id: 4,
          social: 'Tiktok',
          to: 'https://www.tiktok.com/'
        }
      ]
    },
    footer: {
      copyright: 'Agency © 2023'
    }
  }
  return <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
}

export { GlobalProvider }
