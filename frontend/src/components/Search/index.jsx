import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Search.css'
import { IconDrop, IconSearch } from '../Icon'
import { TokenContext } from '../../context/TokenProvider'
import SearchService from '../../services/SearchService'

const searchTypeOptions = [
  { value: 'album', label: 'Albums' },
  { value: 'artist', label: 'Artists' },
  { value: 'track', label: 'Tracks' }
]

const Search = () => {
  const token = useContext(TokenContext)
  const [searchString, setSearchString] = useState('')
  const [searchType, setSearchType] = useState(searchTypeOptions[0].value)
  const [searchPlaceholder, setSearchPlaceholder] = useState('Search for...')
  const navigate = useNavigate()

  const performSearch = () => {
    SearchService.run(token, searchString, searchType)
      .then(result => {
        navigate('/search', { state: result })
      })
      .catch(console.warn)
  }

  useEffect(() => {
    const article = (() => {
      switch (searchType) {
        case searchTypeOptions[0].value:
        case searchTypeOptions[1].value:
          return 'an'
        default:
          return 'a'
      }
    })()

    setSearchPlaceholder(
      `Search for ${article} ${searchType}`
    )
  }, [searchType])

  return (
    <div className='Search'>
      <input
        type='text'
        placeholder={searchPlaceholder}
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
