import { useEffect, useRef } from 'react'

import './TrackTooltip.css'

const TrackTooltip = ({ isOpen, close, position, track }) => {
  const tooltipRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target))
        close()
    }

    if (isOpen)
      document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.addEventListener('mousedown', handleOutsideClick)
    }
  }, [isOpen, close])

  if (!isOpen)
    return <></>

  return (
    <div
      className='TrackTooltip'
      ref={tooltipRef}
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`
      }}
    >
      <div>
        {track.name} ~ {track.artists[0].name}
      </div>
      Spotify&nbsp;
      <a
        href="https://community.spotify.com/t5/Spotify-for-Developers/Preview-URLs-MP3-no-longer-exist-all-tracks/td-p/6685031"
        target="_blank"
      >
        doesn&apos;t allow song previews anymore
      </a>
      &nbsp;:(<br />
      But you can still listen to it!&nbsp;
      <a
        href={track.external_urls.spotify}
        target="_blank"
      >Open it on Spotify</a>.
    </div>
  )
}

export default TrackTooltip
