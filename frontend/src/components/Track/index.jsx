import './Track.css'
import { IconPause, IconPlay } from '../Icon'

const Track = ({ trackElement }) => {

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
    </div>
  )
}

export default Track
