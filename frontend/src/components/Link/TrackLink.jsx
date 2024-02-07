import { useContext, useState } from 'react'

import './Link.css'
import { IconPause, IconPlay } from '../Icon'
import { numberToMinSec } from '../../util/numberParser'
import { TrackContext } from '../../context/TrackContext'

const renderCover = track => {
  if (!track.album) return <></>

  return (
    <img
      className='Link__Image'
      src={track.album.images[0].url}
      alt={`${track.name} album cover`}
    />
  )
}

const TrackLink = ({ trackElement }) => {
  const { track, setTrack } = useContext(TrackContext)
  const audioPlayer = document.querySelector('audio')
  const [paused, setPaused] = useState(audioPlayer.paused)

  return (
    <div
      className='Link Link--track'
      onClick={() => {
        if (track.id !== trackElement.id) {
          setTrack(trackElement)
          return setPaused(false)
        }

        if (paused && track.id === trackElement.id) {
          audioPlayer.play()
          return setPaused(false)
        }

        audioPlayer.pause()
        setPaused(true)
      }}
    >
      {!trackElement.album && <div className='Link__TrackNumber'>{trackElement.track_number}</div>}
      <div className={`Link__PlayButton ${!trackElement.album && 'Link__PlayButton--FromAlbum'}`}>
        {track.id === trackElement.id && !paused ? <IconPause /> : <IconPlay />}
      </div>
      {renderCover(trackElement)}
      <div className='Link__Data'>
        <h4>{trackElement.name}</h4>
        {trackElement.album && <h5>{trackElement.artists[0].name}</h5>}
        <h5>{numberToMinSec(trackElement.duration_ms)}</h5>
        {trackElement.explicit && <code>explicit</code>}
      </div>
    </div>
  )
}

export default TrackLink
