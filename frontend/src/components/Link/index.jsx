import { Link as LinkRR } from 'react-router-dom'

import './Link.css'
import { IconCover, IconPerson } from '../Icon'
import { numberParserLf } from '../../util/numberParser'

const renderCover = element => {
  const hasCover = !!element.images.length

  if (!hasCover) {
    if (element.type === 'artist') return <IconPerson size={180} />
    return <IconCover size={180} />
  }

  return <img className='Link__Image' src={element.images[0].url} />
}

const renderAdditionalElements = element => {
  switch (element.type) {
    case 'album':
      return (
        <>
          <h5>{element.artists[0].name}</h5>
          <h5>{new Date(element.release_date).getFullYear()}</h5>
        </>
      )
    case 'artist':
      return <h5>{numberParserLf(element.followers.total)} followers</h5>
    default:
      throw new Error('Unknown Link type: ' + element.type)
  }
}

const Link = ({ element }) => {
  return (
    <LinkRR className={`Link Link--${element.type}`} to={`/${element.type}s/${element.id}`}>
      {renderCover(element)}
      <div className='Link__Data'>
        <h4>{element.name}</h4>
        {renderAdditionalElements(element)}
      </div>
    </LinkRR>
  )
}

export default Link
