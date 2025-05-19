import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import './Track.css'
import TrackTooltip from './TrackTooltip'
import { IconExplicit, IconPause, IconPlay } from '../Icon'
import { numberToMinSec } from '../../util/numberParser'
import { useTrack } from '../../context/TrackProvider'

const Track = ({ trackElement }) => {
  const { setCurrentTrack } = useTrack()
  const [tooltipOpen, setTooltipOpen] = useState(false)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const playButtonRef = useRef(null)

  const coverUrl = trackElement.album.images?.[2]?.url
  const playable = trackElement.is_playable

  const playSong = (ev) => {
    if (!playable) {
      ev.preventDefault()
      return
    }
    setCurrentTrack(trackElement.id)
  }

  const openTrackTooltip = (event) => {
    if (!playable) {
      ev.preventDefault()
      return
    }

    const axisY = window.scrollY + window.innerHeight / 2
    const y = event.pageY

    setTooltipPosition({
      x: event.pageX + 15,
      y: y < axisY ? y : y - 220,
    })
    setTooltipOpen(true)
  }

  const closeTooltip = () => {
    setTooltipOpen(false)
  }

  return trackElement && (
    <div className={`Track ${!playable ? 'Track--Disabled' : ''}`}>
      <div className='Track__Header'>
        <div
          className='Track__Header__PlayPauseButton'
          onClick={openTrackTooltip}
          ref={playButtonRef}
        >
        {
          false /* TODO */ ?
          <IconPause size={32} /> :
          <IconPlay size={32} />
        }
        </div>
        <Link
          className={`Track__Header__AlbumCover ${!coverUrl ? 'Track__Header__AlbumCover--Undefined' : ''}`}
          to={`/albums/${trackElement.album.id}`}
        >
          <img src={coverUrl} />
          {!coverUrl && 'no cover :('}
        </Link>
      </div>
      <div className='Track__Body'>
        <div>
          {trackElement.explicit && (<><IconExplicit size={11} />&nbsp;</>)}
          {trackElement.name}
        </div>

        <div className='Track__Body__Artists'>
        { /* comma-separated artists list */
        trackElement.artists.map((artist, i) =>
          <span key={artist.id}>
            <Link
              className='Track__Body__Artists__Artist'
              to={`/artists/${artist.id}`}
            >
              {artist.name}
            </Link>
            {i !== trackElement.artists.length - 1 &&
              <span
                className='Track__Body__Artists__Comma'
                onClick={e => e.preventDefault()}
              >,</span>
            }
          </span>
        )
        }
        </div>

      </div>

      <div className='Track__Like'>{/* TODO */}</div>

      <div className='Track__Duration'>
        { numberToMinSec(trackElement.duration_ms) }
      </div>

      {/* Track tooltip */}
      <TrackTooltip
        isOpen={tooltipOpen}
        position={tooltipPosition}
        onClose={closeTooltip}
      >
      </TrackTooltip>
    </div>
  )
}

export default Track
