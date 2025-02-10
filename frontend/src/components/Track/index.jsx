import './Track.css'
import { IconPause, IconPlay } from '../Icon'

const Track = ({ trackElement }) => {

  return trackElement && (
    <div className='Track'>
      <div className='Track__Header'>
        <div className="Track__PlayPauseButton">
        {
          false /* TODO */ ?
          <IconPause size={20} /> :
          <IconPlay size={20} />
        }
        </div>
        <img src={trackElement.album.images[2].url} />
      </div>
    </div>
  )
}

export default Track
