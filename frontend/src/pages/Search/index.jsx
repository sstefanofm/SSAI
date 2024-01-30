import { useLocation } from 'react-router-dom'

const renderSearch = state => {
  for (let searchResults in state)
    switch (searchResults) {
      case 'albums':
        return (
          <div>
            <h3>Albums</h3> {console.log(state[searchResults])}
          </div>
        )
      case 'artists':
        return (
          <div>
            <h3>Artists</h3> {console.log(state[searchResults])}
          </div>
        )
      case 'tracks':
        return (
          <div>
            <h3>Tracks</h3> {console.log(state[searchResults])}
          </div>
        )
      default:
        return <></>
    }
}

const Search = () => {
  const { state } = useLocation()

  return (
    <div>
      <h2>Search</h2> {renderSearch(state)}
    </div>
  )
}

export default Search
