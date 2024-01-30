import { Link as LinkRR } from 'react-router-dom'

import { IconCover, IconPerson } from '../Icon'

const renderIcon = (type = 'album') => {
  switch (type) {
    case 'album':
      return <IconCover size={300} />
    case 'artist':
      return <IconPerson size={300} />
    default:
      throw new Error('Unknown icon type')
  }
}

const Link = ({ element, type = '' /* , children */ }) => {
  return (
    <LinkRR to={`/${type}s/${element.id}`}>
      {element.images.length ? (
        <img src={element.images[0].url} alt={`${element.name} album cover|profile picture`} />
      ) : (
        renderIcon(type)
      )}
      <h4>{element.name}</h4>
      {/* { children } */}
    </LinkRR>
  )
}

export default Link
