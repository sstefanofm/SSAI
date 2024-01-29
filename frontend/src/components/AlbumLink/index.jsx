import { Link } from 'react-router-dom'

const AlbumLink = ({ album }) => {
  return (
    <Link to={`/albums/${album.id}`}>
      <img src={album.images[1].url} alt={`${album.name} album cover`} />
      <h3>{album.name}</h3>
      <h4>{new Date(album.release_date).getFullYear()}</h4>
    </Link>
  )
}

export default AlbumLink
