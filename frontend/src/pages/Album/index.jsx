import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import AlbumService from '../../services/AlbumService'
import { TokenContext } from '../../context/TokenProvider'
import Song from '../../components/Song'

const Album = () => {
  const [album, setAlbum] = useState(null)
  const [tracks, setTracks] = useState()

  const token = useContext(TokenContext)
  const { id } = useParams()

  useEffect(() => {
    AlbumService.getOne(token, id).then(album => {
      setAlbum(album)
      setTracks(album.tracks.items)
    })
  }, [])

  return (
    album && (
      <div>
        <h1>{album.name}</h1>
        <img src={album.images[0].url} alt={`${album.name} album cover`} />
        <ul>
          {tracks &&
            tracks.map((at, i) => (
              <Song key={`${at.id}${at.name}`} song={at} fromAlbum={true} order={i + 1} />
            ))}
        </ul>
      </div>
    )
  )
}

export default Album
