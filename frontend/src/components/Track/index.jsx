import './Track.css'
import { IconPause, IconPlay } from '../Icon'
import { numberToMinSec } from '../../util/numberParser'
import { Link } from 'react-router-dom'

const Track = ({ trackElement }) => {
  console.log(trackElement)
  /* TODO
   *  make something with trackElement.is_playable */

  return trackElement && (
    <div className='Track'>
      <div className='Track__Header'>
        <div className='Track__Header__PlayPauseButton'>
        {
          false /* TODO */ ?
          <IconPause size={18} /> :
          <IconPlay size={18} />
        }
        </div>
        <Link
          className='Track__Header__AlbumCover'
          to={`/albums/${trackElement.album.id}`}
        >
          <img src={trackElement.album.images[2].url} />
        </Link>
      </div>
      <div className='Track__Body'>
        {/* should be an <h4> ? */}
        <div>{trackElement.name}</div>

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
    </div>
  )
}

export default Track
