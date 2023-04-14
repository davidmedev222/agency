import { useIntersectionObserver } from '@/hooks'
import styled from 'styled-components'

const VideoStyled = styled('video')`
  aspect-ratio: 2 / 1;
`

interface Props {
  videoURL: string
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
}

const Video = ({ videoURL, autoplay, muted, controls = true, loop }: Props): JSX.Element => {
  const [ref1, isIntersecting1] = useIntersectionObserver({
    threshold: 0.5
  }, true)

  return (
    <VideoStyled ref={ref1} data-opacity data-fade-opacity={isIntersecting1} src={videoURL} autoPlay={autoplay} muted={muted} controls={controls} loop={loop} />
  )
}

export { Video }
