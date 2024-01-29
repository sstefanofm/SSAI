import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ArtistService from '../../services/ArtistService'
import { TokenContext } from '../../context/TokenProvider'
import Song from '../../components/Song'
import Album from '../../components/Album'

const Artist = () => {
  const [artist, setArtist] = useState(null)
  const [topTracks, setTopTracks] = useState([])
  const [albums, setAlbums] = useState([])

  const token = useContext(TokenContext)
  const { id } = useParams()

  useEffect(() => {
    const fetchArtist = async () => {
      setArtist(await ArtistService.getOne(token, id))
    }

    const getTopTracks = async () => {
      setTopTracks((await ArtistService.getTopTracks(token, id)).tracks)
    }

    const getAlbums = async () => {
      setAlbums((await ArtistService.getAlbums(token, id)).items)
    }

    fetchArtist()
    getTopTracks()
    getAlbums()
  }, [])

  return (
    artist && (
      <div>
        <h1>{artist.name}</h1>
        <p>{artist.followers.total} followers</p>
        <img src={artist.images[0].url} alt={`${artist.name} profile picture`} />
        <p>{artist.popularity} // popularity</p>
        <h2>Songs</h2>
        <ul>
          {topTracks.map(tt => (
            <Song key={`${tt.id}${tt.name}`} song={tt} />
          ))}
        </ul>
        <h2>Albums</h2>
        <ul>
          {albums.map(a => (
            <Album key={`${a.id}${a.name}`} album={a} />
          ))}
        </ul>
      </div>
    )
  )
}

export default Artist
