import { useEffect, useState } from 'react'

import './FilterSelector.css'
import { IconLifePreserver } from '../Icon'

export const searchTypeOptions = [
  { value: 'album', label: 'Albums' },
  { value: 'artist', label: 'Artists' },
  { value: 'track', label: 'Tracks' }
]

const getDropdownStyles = (searchType) => {
  const get = (rightPx) => ({
    right: rightPx || 30
  })

  if (window.innerWidth < 750)
    return get(85)

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

const FilterSelector = ({ filter, setFilter }) => {
  const [dropdownFocused, setDropdownFocused] = useState(false)
  const [dropdownIconStyles, setDropdownIconStyles] = useState({})

  useEffect(() => {
    setDropdownIconStyles(
      getDropdownStyles(
        filter,
        dropdownFocused
      )
    )
  }, [filter, dropdownFocused])

  return (
    <div
      className='FilterSelector'
      onMouseEnter={() => setDropdownFocused(true)}
      onMouseLeave={() => setDropdownFocused(false)}
    >
      <select
        name='searchType'
        onChange={e => setFilter(e.target.value)}
      >
        {searchTypeOptions.map((op, i) => (
          <option key={op.value + i} value={op.value}>{op.label}</option>
        ))}
      </select>
      <IconLifePreserver
        size={16}
        style={dropdownIconStyles}
      />
    </div>
  )
}

export default FilterSelector
