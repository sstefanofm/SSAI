import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import AlbumService from '../../services/AlbumService'
import { TokenContext } from '../../context/TokenProvider'
import TrackList from '../../components/TrackList'

const Album = () => {
  const [album, setAlbum] = useState(null)

  const token = useContext(TokenContext)
  const { id } = useParams()

  useEffect(() => {
    AlbumService.getOne(token, id).then(album => {
      setAlbum(album)
    })
  }, [])

  return (
    album && (
      <div>
        <h2>{album.name}</h2>
        <img src={album.images[0].url} alt={`${album.name} album cover`} />
        <TrackList tracks={album.tracks.items} fromAlbum={true} />
      </div>
    )
  )
}

export default Album
