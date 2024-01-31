import { Link as LinkRR } from 'react-router-dom'

import { IconCover, IconPerson } from '../Icon'

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

const renderAdditionalElements = element => {
  switch (element.type) {
    case 'album':
      return <h4>{new Date(element.release_date).getFullYear()}</h4>
    case 'artist':
      return <h4>{element.followers.total}</h4>
    case 'track':
      return (
        <>
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
  return (
    <LinkRR to={`/${element.type}s/${element.id}`}>
      {!element.album && <div>{element.track_number}</div>}
      {renderCover(element)}
      <h4>{element.name}</h4>
      {renderAdditionalElements(element)}
    </LinkRR>
  )
}

export default Link
