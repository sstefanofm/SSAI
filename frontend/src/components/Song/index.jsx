const Song = ({ song }) => {
  return (
    <li>
      <img src={song.album.images[1].url} alt={`${song.album.name} album cover`} />
      <h3>{song.name}</h3>
      <h4>{song.artists[0].name}</h4>
      <div>{song.explicit && 'explicit'}</div>
    </li>
  )
}

export default Song
