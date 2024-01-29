const Song = ({ song, fromAlbum = false, order = -1 }) => {
  return (
    <li>
      {fromAlbum && <div>{order}</div>}
      {!fromAlbum && <img src={song.album.images[1].url} alt={`${song.album.name} album cover`} />}
      <h3>{song.name}</h3>
      <h4>{song.artists[0].name}</h4>
      {song.explicit && <div>explicit</div>}
      <div>{song.duration_ms}</div>
    </li>
  )
}

export default Song
