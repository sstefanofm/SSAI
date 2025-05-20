import ReactAudioPlayer from 'react-audio-player'

import './TrackPlayer.css'
import { useTrack } from '../../context/TrackProvider'
import { useEffect, useState } from 'react'

const TrackPlayer = () => {
  const { currentTrack } = useTrack()
  const [trackSrc, setTrackSrc] = useState()

  useEffect(() => {
    if (!currentTrack)
      return
    fetch('https://open.spotify.com/embed/track/' + currentTrack)
      .then(console.log)
  }, [currentTrack])

  return (
    <div className='TrackPlayer'>
      <ReactAudioPlayer
        className='TrackPlayer__Player'
        src={trackSrc}
        autoPlay
        controls
      />
    </div>
  )
}

export default TrackPlayer
