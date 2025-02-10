import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Search.css'
import FilterSelector, { searchTypeOptions } from './FilterSelector'
import { IconSearch } from '../Icon'
import { TokenContext } from '../../context/TokenProvider'
import SearchService from '../../services/SearchService'

const Search = () => {
  const token = useContext(TokenContext)
  const [searchString, setSearchString] = useState('')
  const [searchType, setSearchType] = useState(searchTypeOptions[0].value)
  const [searchPlaceholder, setSearchPlaceholder] = useState('Search for...')
  const navigate = useNavigate()

  const performSearch = () =>
    SearchService.run(token, searchString, searchType)
      .then(result => {
        navigate('/search', { state: result })
      })
      .catch(console.warn)

  useEffect(() => {
    const article = searchType === searchTypeOptions[2].value ? 'a' : 'an'

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
      <FilterSelector
        filter={searchType}
        setFilter={setSearchType}
      />
      <button onClick={performSearch}>
        <IconSearch size={15} />
      </button>
    </div>
  )
}

export default Search
