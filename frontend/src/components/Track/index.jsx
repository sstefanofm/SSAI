import { useContext } from 'react'
import ReactAudioPlayer from 'react-audio-player'

import './Track.css'
import { TrackContext } from '../../context/TrackContext'

const Track = () => {
  const { track } = useContext(TrackContext)

  return (
    <div className='Track'>
      <ReactAudioPlayer
        className='Track__Player'
        src={track.preview_url}
        autoPlay={true}
        controls={true}
      />
    </div>
  )
}

export default Track
