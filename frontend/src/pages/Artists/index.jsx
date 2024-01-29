import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import './Artists.css'
import ArtistService from '../../services/ArtistService'
import { TokenContext } from '../../context/TokenProvider'

const Artists = () => {
  const token = useContext(TokenContext)

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
      <h2>Artists</h2>
      <div className='Artists'>
        {artists.map(a => {
          return (
            <Link key={a.id} to={a.id} className='Artist'>
              <img className='Artist__Image' src={a.images[1].url} />
              <h3 className='Artist__Name'>{a.name}</h3>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Artists
