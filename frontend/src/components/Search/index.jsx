import { useContext, useState } from 'react'

import { TokenContext } from '../../context/TokenProvider'
import SearchService from '../../services/SearchService'

const Search = () => {
  const token = useContext(TokenContext)
  const [searchString, setSearchString] = useState('')
  const [searchType, setSearchType] = useState('album')

  const performSearch = () => {
    SearchService.run(token, searchString, searchType).then(console.log).catch(console.warn)
  }

  return (
    <div>
      <input
        type='text'
        placeholder='What do you want to search for?'
        name='search'
        onChange={e => setSearchString(e.target.value)}
      />
      <select name='searchType' onChange={e => setSearchType(e.target.value)}>
        <option value='album'>Albums</option>
        <option value='artist'>Artists</option>
        <option value='track'>Tracks</option>
      </select>
      <button onClick={performSearch}>search</button>
    </div>
  )
}

export default Search
