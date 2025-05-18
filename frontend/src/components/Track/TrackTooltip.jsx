import { useEffect, useRef } from 'react'

import './TrackTooltip.css'

const TrackTooltip = ({ isOpen, onClose, position, trackName }) => {
  const tooltipRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target))
        onClose()
    }

    if (isOpen)
      document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.addEventListener('mousedown', handleOutsideClick)
    }
  }, [isOpen, onClose])

  if (!isOpen)
    return <></>

  return (
    <div
      ref={tooltipRef}
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`
      }}
    >
      <p className="TrackTooltip__Title">Play "{trackName}"?</p>
      <div className="TrackTooltip__Actions">
        <button 
          className="TrackTooltip__Button TrackTooltip__Button--Play"
        >
          Play Now
        </button>
        <button 
          className="TrackTooltip__Button TrackTooltip__Button--Cancel"
          onClick={onClose}
        >
          Cancel
        </button>
      </div><p className="TrackTooltip__Title">Play "{trackName}"?</p>
      <div className="TrackTooltip__Actions">
        <button 
          className="TrackTooltip__Button TrackTooltip__Button--Play"
        >
          Play Now
        </button>
        <button 
          className="TrackTooltip__Button TrackTooltip__Button--Cancel"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default TrackTooltip
