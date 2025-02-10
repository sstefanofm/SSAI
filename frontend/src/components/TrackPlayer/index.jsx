import { useContext } from 'react'
import ReactAudioPlayer from 'react-audio-player'

import './TrackPlayer.css'
import { TrackPlayerContext } from '../../context/TrackPlayerContext'

const TrackPlayer = () => {
  const { track } = useContext(TrackPlayerContext)

  return (
    <div className='TrackPlayer'>
      <ReactAudioPlayer
        className='TrackPlayer__Player'
        src={track.preview_url}
        autoPlay={true}
        controls={true}
      />
    </div>
  )
}

export default TrackPlayer
