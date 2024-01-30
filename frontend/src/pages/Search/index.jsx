import { useLocation } from 'react-router-dom'

import AlbumList from '../../components/AlbumList'
import ArtistList from '../../components/ArtistList'
import TrackList from '../../components/TrackList'

const renderSearch = state => {
  for (let searchResults in state)
    switch (searchResults) {
      case 'albums':
        return (
          <>
            <h3>Albums</h3> <AlbumList albums={state[searchResults].items} />
          </>
        )
      case 'artists':
        return (
          <>
            <h3>Artists</h3> <ArtistList artists={state[searchResults].items} />
          </>
        )
      case 'tracks':
        return (
          <>
            <h3>Tracks</h3> <TrackList tracks={state[searchResults].items} fromAlbum={false} />
          </>
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
