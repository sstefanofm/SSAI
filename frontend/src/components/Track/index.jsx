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
          <Link
            key={artist.id}
            to={`/artists/${artist.id}`}
          >
            {i !== 0 &&
              <span
                className='Track__Body__Artists__Comma'
                onClick={e => e.preventDefault()}
              >,&nbsp;</span>
            }
            {artist.name}
          </Link>
        )
        }
        </div>

        {
          numberToMinSec(trackElement.duration_ms)
        }
      </div>
      {/* TODO button ? */}
      <div></div>
    </div>
  )
}

export default Track
