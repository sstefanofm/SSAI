import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ArtistService from '../../services/ArtistService'
import { TokenContext } from '../../context/TokenProvider'
import AlbumLink from '../../components/AlbumLink'
import TrackList from '../../components/TrackList'

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
        <h2>Top songs</h2>
        <TrackList tracks={topTracks} />
        <h2>Albums</h2>
        {albums.map(a => (
          <AlbumLink key={`${a.id}${a.name}`} album={a} />
        ))}
      </div>
    )
  )
}

export default Artist
