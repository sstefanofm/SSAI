import Link from '../Link'

const AlbumList = ({ albums = [] }) => (
  <div>
    {albums.map(a => (
      <Link key={a.id} element={a} type='album'>
        <h4>{new Date(a.release_date).getFullYear()}</h4>
      </Link>
    ))}
  </div>
)

export default AlbumList
