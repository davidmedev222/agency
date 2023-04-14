import { css } from 'styled-components'
import { fadeBottom } from '@/styles-components/utils'

export const attributes = css`
  [data-opacity=true] {
    opacity: 0;
    transition: opacity 1000ms;
  }
  [data-fade-opacity=true]{
    opacity: 1;
  }
  [data-fade-bottom=true]{
    animation: ${fadeBottom} 1500ms cubic-bezier(0, 0, 0, 1) forwards;
  }
  [data-delay="100"]{
    animation-delay: 100ms;
  }
  [data-delay="150"]{
    animation-delay: 150ms;
  }
  [data-delay="200"]{
    animation-delay: 200ms;
  }
  [data-delay="250"]{
    animation-delay: 250ms;
  }
  [data-delay="300"]{
    animation-delay: 300ms;
  }
  [data-delay="350"]{
    animation-delay: 350ms;
  }
  [data-delay="400"]{
    animation-delay: 400ms;
  }
  [data-delay="450"]{
    animation-delay: 450ms;
  }
  [data-delay="500"]{
    animation-delay: 500ms;
  }
  [data-delay="550"]{
    animation-delay: 550ms;
  }
  [data-delay="600"]{
    animation-delay: 600ms;
  }
  [data-delay="650"]{
    animation-delay: 650ms;
  }
  [data-delay="700"]{
    animation-delay: 700ms;
  }
  [data-delay="750"]{
    animation-delay: 750ms;
  }
  [data-delay="800"]{
    animation-delay: 800ms;
  }
  [data-delay="850"]{
    animation-delay: 850ms;
  }
  [data-delay="900"]{
    animation-delay: 900ms;
  }
  [data-delay="950"]{
    animation-delay: 950ms;
  }
  [data-delay="1000"]{
    animation-delay: 1000ms;
  }
`
