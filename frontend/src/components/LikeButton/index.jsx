import { useState } from 'react'

import './LikeButton.css'
import { IconHeart } from '../Icon'

const LikeButton = () => {
  const [heartColor, setHeartColor] = useState('#aaa')

  const handleChangeStyle = (leave = false) => {
    setHeartColor(leave ? '#aaa' : '#b00')
  }

  const handleLike = () => {
    console.log('like')
  }

  return (
    <div
      className='LikeButton'
      onMouseEnter={() => handleChangeStyle(false)}
      onMouseLeave={() => handleChangeStyle(true)}
      onClick={handleLike}
    >
      <IconHeart
        size={20}
        style={{ color: heartColor }}
      />
    </div>
  )
}

export default LikeButton
