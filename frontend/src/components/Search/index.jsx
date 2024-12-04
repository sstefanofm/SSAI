import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Search.css'
import { IconDrop, IconSearch } from '../Icon'
import { TokenContext } from '../../context/TokenProvider'
import SearchService from '../../services/SearchService'

const Search = () => {
  const token = useContext(TokenContext)
  const [searchString, setSearchString] = useState('')
  const [searchType, setSearchType] = useState('album')
  const navigate = useNavigate()

  const performSearch = () => {
    SearchService.run(token, searchString, searchType)
      .then(result => {
        navigate('/search', { state: result })
      })
      .catch(console.warn)
  }

  return (
    <div className='Search'>
      <input
        type='text'
        placeholder='What do you want to search for?'
        name='search'
        onChange={e => setSearchString(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') performSearch()
        }}
      />
      <div className='Search__FilterSelector' onClick={() => console.log('should open the selector')}>
        <select name='searchType' onChange={e => setSearchType(e.target.value)}>
          <option value='album'>Albums</option>
          <option value='artist'>Artists</option>
          <option value='track'>Tracks</option>
        </select>
        <IconDrop size={16} />
      </div>
      <button onClick={performSearch}>
        <IconSearch size={15} />
      </button>
    </div>
  )
}

export default Search
