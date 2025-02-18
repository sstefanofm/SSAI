import { useContext, useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'

import './Album.css'
import AlbumService from '../../services/AlbumService'
import { TokenContext } from '../../context/TokenProvider'
import List from '../../components/List'

const Album = () => {
  const [album, setAlbum] = useState(null)

  const token = useContext(TokenContext)
  const { id } = useParams()

  useEffect(() => {
    /* TODO
     * instead of making an API request each time I enter an /albums/{id} endpoint,
     *  try to get the Album data through props */
    AlbumService.getOne(token, id).then(album => {
      setAlbum(album)
    })
  }, [])

  return (
    album && (
      <div>
        <div className='Album__Data'>
          <NavLink
            className='Album__Data__ArtistLink'
            to={`/artists/${album.artists[0].id}`}
          >
            <h4>{album.artists[0].name}</h4>
          </NavLink>
          <h2 className='Album__Data__AlbumName'>{album.name}</h2>
          <img
            className='Album__Image'
            src={album.images[0].url}
            alt={`${album.name} album cover`}
          />
        </div>
        {/* TODO with the new tracks <List elements={album.tracks.items} /> */}
      </div>
    )
  )
}

export default Album
