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

const getDropdownStyles = (searchType, runAnimation = false) => {
  const animateOrStay = runAnimation ?
    { animation: 'rotate 2s infinite linear' } :
    { transform: `rotate(${ 100 }deg)` }

  const get = (rightPx) => ({
    right: rightPx || 30,
    ...animateOrStay
  })

  switch (searchType) {
    case searchTypeOptions[0].value:
      return get(85)
    case searchTypeOptions[1].value:
      return get(88)
    case searchTypeOptions[2].value:
    default:
      return get(87)
  }
}

const Search = () => {
  const token = useContext(TokenContext)
  const [searchString, setSearchString] = useState('')
  const [searchType, setSearchType] = useState(searchTypeOptions[0].value)
  const [searchPlaceholder, setSearchPlaceholder] = useState('Search for...')
  const [dropdownIconStyles, setDropdownIconStyles] = useState(getDropdownStyles())
  const [dropdownFocused, setDropdownFocused] = useState(false)
  const navigate = useNavigate()

  const performSearch = () => {
    SearchService.run(token, searchString, searchType)
      .then(result => {
        navigate('/search', { state: result })
      })
      .catch(console.warn)
  }

  useEffect(() => {
    const article = searchType === searchTypeOptions[2].value ? 'a' : 'an'

    setSearchPlaceholder(
      `Search for ${article} ${searchType}`
    )
    setDropdownIconStyles(
      getDropdownStyles(searchType, dropdownFocused)
    )
  }, [searchType, dropdownFocused])

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
      <div
        className='Search__FilterSelector'
        onMouseEnter={() => setDropdownFocused(true)}
        onMouseLeave={() => setDropdownFocused(false)}
      >
        {/* select has 100% width&height */}
        <select
          name='searchType'
          onChange={e => setSearchType(e.target.value)}
        >
          {searchTypeOptions.map((op, i) => (
            <option key={op.value + i} value={op.value}>{op.label}</option>
          ))}
        </select>
        <IconDrop
          size={16}
          style={dropdownIconStyles}
        />
      </div>
      <button onClick={performSearch}>
        <IconSearch size={15} />
      </button>
    </div>
  )
}

export default Search
