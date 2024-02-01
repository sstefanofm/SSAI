import { useContext } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { TrackContext } from '../../context/TrackContext'

const Track = () => {
  const { track } = useContext(TrackContext)

  return (
    <div>
      <ReactAudioPlayer src={track.preview_url} autoPlay={true} controls={true} />
    </div>
  )
}

export default Track
