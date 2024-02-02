import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import './Artist.css'
import ArtistService from '../../services/ArtistService'
import { TokenContext } from '../../context/TokenProvider'
import List from '../../components/List'

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
        <div className='Artist__Data'>
          <h2 className='Artist__Name'>{artist.name}</h2>
          <p>
            <i>{artist.followers.total} followers</i>
          </p>
          <img
            className='Artist__Image'
            src={artist.images[1].url}
            alt={`${artist.name} profile picture`}
          />
        </div>
        <h3>Top songs</h3>
        <List elements={topTracks} />
        <h3>Albums</h3>
        <List elements={albums} />
      </div>
    )
  )
}

export default Artist
