import { useContext } from 'react'
import { Link as LinkRR } from 'react-router-dom'

import { IconCover, IconPerson } from '../Icon'
import { TrackContext } from '../../context/TrackContext'

const renderCover = element => {
  if (element.type === 'track') element = element.album

  /* is track from Album page (no need to show cover) */
  if (!element) return <></>

  const hasCover = !!element.images.length

  if (!hasCover) {
    if (element.type === 'artist') return <IconPerson size={300} />
    return <IconCover size={300} />
  }

  return <img src={element.images[0].url} />
}

// https://p.scdn.co/mp3-preview/01c723bc6697303c1f402c9d15d0e96b7eb6fbee?cid=c2499296b6e342ac82ae74465ba02356

const renderAdditionalElements = (element, playTrack) => {
  switch (element.type) {
    case 'album':
      return <h4>{new Date(element.release_date).getFullYear()}</h4>
    case 'artist':
      return <h4>{element.followers.total}</h4>
    case 'track':
      return (
        <>
          <button
            onClick={ev => {
              ev.preventDefault()
              playTrack(element)
            }}
          >
            Play track
          </button>
          {element.album && <h4>{element.artists[0].name}</h4>}
          <h5>{element.duration_ms}</h5>
          {element.explicit && <div>explicit</div>}
        </>
      )
    default:
      throw new Error('Unknown Link type: ' + element.type)
  }
}

const Link = ({ element }) => {
  const { setTrack } = useContext(TrackContext)

  return (
    <LinkRR to={`/${element.type}s/${element.id}`}>
      {!element.album && <div>{element.track_number}</div>}
      {renderCover(element)}
      <h4>{element.name}</h4>
      {renderAdditionalElements(element, setTrack)}
    </LinkRR>
  )
}

export default Link
