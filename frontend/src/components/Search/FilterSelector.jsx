import { useEffect, useState } from 'react'

import './FilterSelector.css'
import { IconLifePreserver } from '../Icon'

export const searchTypeOptions = [
  { value: 'album', label: 'Albums' },
  { value: 'artist', label: 'Artists' },
  { value: 'track', label: 'Tracks' }
]

const getIconRotationDegrees = (iconElement) => {
  const matrixStr = getComputedStyle(iconElement).transform
  const [ _, cos, sin ] = matrixStr.match(
    /matrix\((-?\d+\.\d+?), (-?\d+\.\d+?), (-?\d+\.\d+?), (-?\d+\.\d+?), (\d+), (\d+)\)/
  )
  const rad = Math.atan2(+sin, +cos)

  /* degrees */
  return rad * (180 / Math.PI)
}

const getDropdownStyles = (searchType, runAnimation = false, iconElement) => {
  const animateOrStay = runAnimation ?
    { animation: 'rotate 2s infinite linear' } :
    { transform: `rotate(${ getIconRotationDegrees(iconElement) }deg)` }

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
  const iconCustomId = 'FilterSelector__Icon'

  useEffect(() => {
    const iconElement = document.querySelector('#' + iconCustomId)

    if (!!iconElement)
      setDropdownIconStyles(
        getDropdownStyles(
          filter,
          dropdownFocused,
          iconElement
        )
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
        customId={iconCustomId}
      />
    </div>
  )
}

export default FilterSelector
