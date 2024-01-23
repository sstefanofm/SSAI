import { useState, useEffect } from 'react'

import './Artists.css'
import ArtistService from '../../services/ArtistService'

const Artists = ({ token }) => {
  const [artists, setArtists] = useState([])

  useEffect(() => {
    const fetchArtists = async () => {
      const { artists } = await ArtistService.get(token)

      setArtists(artists)
    }

    fetchArtists()
  }, [])

  return (
    <>
      <h1>Artists</h1>
      <div className='Artists'>
        {artists.map(a => {
          return (
            <div
              key={a.id}
              className='Artist'
              onClick={() => console.log(a)}
            >
              <img
                className='Artist__Image'
                src={a.images[1].url}
              />
              <h3 className='Artist__Name'>{a.name}</h3>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Artists
