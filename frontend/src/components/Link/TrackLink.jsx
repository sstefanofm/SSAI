import { useContext } from 'react'

import './Link.css'
import { IconPlay } from '../Icon'
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

const TrackLink = ({ track }) => {
  const { setTrack } = useContext(TrackContext)

  return (
    <div
      className='Link Link--track'
      onClick={ev => {
        ev.preventDefault()
        setTrack(track)
      }}
    >
      {!track.album && <div className='Link__TrackNumber'>{track.track_number}</div>}
      <div className={`Link__PlayButton ${!track.album && 'Link__PlayButton--FromAlbum'}`}>
        <IconPlay />
      </div>
      {renderCover(track)}
      <div className='Link__Data'>
        <h4>{track.name}</h4>
        {track.album && <h5>{track.artists[0].name}</h5>}
        <h5>{numberToMinSec(track.duration_ms)}</h5>
        {track.explicit && <code>explicit</code>}
      </div>
    </div>
  )
}

export default TrackLink
