import { useContext } from 'react'

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

  return (
    <div
      className='Link Link--track'
      onClick={ev => {
        ev.preventDefault()
        setTrack(trackElement)
      }}
    >
      {!trackElement.album && <div className='Link__TrackNumber'>{trackElement.track_number}</div>}
      <div className={`Link__PlayButton ${!trackElement.album && 'Link__PlayButton--FromAlbum'}`}>
        {track.id === trackElement.id ? <IconPause /> : <IconPlay />}
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
