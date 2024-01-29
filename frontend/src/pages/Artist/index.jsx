import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ArtistService from '../../services/ArtistService'
import { TokenContext } from '../../context/TokenProvider'
import Song from '../../components/Song'

const Artist = () => {
  const [artist, setArtist] = useState(null)
  const [topTracks, setTopTracks] = useState([])

  const token = useContext(TokenContext)
  const { id } = useParams()

  useEffect(() => {
    const fetchArtist = async () => {
      setArtist(await ArtistService.getOne(token, id))
    }

    const getTopTracks = async () => {
      setTopTracks((await ArtistService.getTopTracks(token, id)).tracks)
    }

    fetchArtist()
    getTopTracks()
  }, [])

  return (
    artist && (
      <div>
        <h1>{artist.name}</h1>
        <p>{artist.followers.total} followers</p>
        <img src={artist.images[0].url} alt={`${artist.name} profile picture`} />
        <p>{artist.popularity} // popularity</p>
        <ul>
          {topTracks.map(tt => (
            <Song key={`${tt.id}${tt.name}`} song={tt} />
          ))}
        </ul>
      </div>
    )
  )
}

export default Artist
