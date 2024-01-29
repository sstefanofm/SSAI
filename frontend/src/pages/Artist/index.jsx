import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ArtistService from '../../services/ArtistService'
import { TokenContext } from '../../context/TokenProvider'

const Artist = () => {
  const [artist, setArtist] = useState(null)

  const token = useContext(TokenContext)
  const { id } = useParams()

  useEffect(() => {
    const fetchArtist = async () => {
      setArtist(await ArtistService.getOne(token, id))
    }

    fetchArtist()
  }, [])

  return (
    artist && (
      <div>
        <h1>{artist.name}</h1>
        <p>{artist.followers.total} followers</p>
        <img src={artist.images[0].url} alt={`${artist.name} profile picture`} />
        <p>{artist.popularity} // popularity</p>
      </div>
    )
  )
}

export default Artist
