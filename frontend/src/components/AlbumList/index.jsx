import AlbumLink from '../AlbumLink'

const AlbumList = ({ albums = [] }) => (
  <div>
    {albums.map(a => (
      <AlbumLink key={`${a.id}${a.name}`} album={a} />
    ))}
  </div>
)

export default AlbumList
