import { useContext } from 'react'
import ReactAudioPlayer from 'react-audio-player'

import './TrackPlayer.css'
import { TrackContext } from '../../context/TrackContext'

const TrackPlayer = () => {
  //const { track } = useContext(TrackContext)
  const track = {preview_url:'https://api.spotify.com/v1/tracks/20ZP3Om9DvDazXrNUC7WM2'}

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
