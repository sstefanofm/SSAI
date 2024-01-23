import { useState, useEffect } from 'react'

import ArtistService from '../services/ArtistService'

const Artists = ({ token }) => {
  const [artists, setArtists] = useState([])

  useEffect(() => {
    const fetchArtists = async () => {
      const { artists } = await ArtistService.get(token)

      setArtists(artists)

      console.log(artists)
    }

    fetchArtists()
  }, [])

  return (
    <div>
      {artists.map(a => {
        return <img src={a.images[2].url} />
      })}
    </div>
  )
}

export default Artists
