import styled from 'styled-components'

const VideoStyled = styled('video')`
  aspect-ratio: 16 / 9;
`

interface Props {
  videoURL: string
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
}

const Video = ({ videoURL, autoplay, muted, controls, loop }: Props): JSX.Element => {
  return (
    <VideoStyled src={videoURL} autoPlay={autoplay} muted={muted} controls={controls} loop={loop} />
  )
}

export { Video }
