import { useEffect, useState } from 'react'

import './FilterSelector.css'
import { IconLifePreserver } from '../Icon'

export const searchTypeOptions = [
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

const FilterSelector = ({ filter, setFilter }) => {
  const [dropdownFocused, setDropdownFocused] = useState(false)
  const [dropdownIconStyles, setDropdownIconStyles] = useState(getDropdownStyles())

  useEffect(() => {
    setDropdownIconStyles(
      getDropdownStyles(filter, dropdownFocused)
    )
  }, [filter, dropdownFocused])

  return (
    <div
      className='FilterSelector'
      onMouseEnter={() => setDropdownFocused(true)}
      onMouseLeave={() => setDropdownFocused(false)}
    >
      {/* select has 100% width&height */}
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
