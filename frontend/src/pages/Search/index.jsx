import { useLocation } from 'react-router-dom'

import List from '../../components/List'

const Search = () => {
  const { state } = useLocation()

  const elementType = Object.keys(state)[0]

  let title = Object.keys(state)[0]
  title = title.charAt(0).toUpperCase() + title.slice(1)

  return (
    <div>
      <h2>Search</h2>
      <h3>{title}</h3>
      <List
        elements={state[elementType].items}
        oneLine={elementType === 'tracks'}
        isAlbumView={false}
      />
    </div>
  )
}

export default Search
