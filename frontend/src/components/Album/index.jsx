const Album = ({ album }) => {
  return (
    <li>
      <img src={album.images[1].url} alt={`${album.name} album cover`} />
      <h3>{album.name}</h3>
      <h4>{new Date(album.release_date).getFullYear()}</h4>
    </li>
  )
}

export default Album
