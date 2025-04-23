import ReactAudioPlayer from 'react-audio-player'

import './TrackPlayer.css'
import { useTrack } from '../../context/TrackProvider'

const TrackPlayer = () => {
  const { currentTrack } = useTrack()

  console.log(currentTrack)

  return (
    <div className='TrackPlayer'>
      <ReactAudioPlayer
        className='TrackPlayer__Player'
        src={''}
        autoPlay={true}
        controls={true}
      />
    </div>
  )
}

export default TrackPlayer
