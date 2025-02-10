import './Track.css'
import { IconPause, IconPlay } from '../Icon'
import { numberToMinSec } from '../../util/numberParser'

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
        <img
          className='Track__Header__AlbumCover'
          src={trackElement.album.images[2].url}
        />
      </div>
      <div className='Track__Body'>
        {/* should be an <h4> ? */}
        <div>{trackElement.name}</div>
        {
          /* will be a Link */
          trackElement.artists.map(
            artist => (<span>{artist.name}</span>)
          )
        }
        {
          numberToMinSec(trackElement.duration_ms)
        }
      </div>
    </div>
  )
}

export default Track
