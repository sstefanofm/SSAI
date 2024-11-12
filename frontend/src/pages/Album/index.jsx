import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import './Album.css'
import AlbumService from '../../services/AlbumService'
import { TokenContext } from '../../context/TokenProvider'
import List from '../../components/List'
import CustomNavLink from '../../components/CustomNavLink'

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
        <div className='Album__Data'>
          <CustomNavLink
            to={`/artists/${album.artists[0].id}`}
            text={album.artists[0].name}
          />
          <h2>{album.name}</h2>
          <img
            className='Album__Image'
            src={album.images[0].url}
            alt={`${album.name} album cover`}
          />
        </div>
        <List elements={album.tracks.items} />
      </div>
    )
  )
}

export default Album
