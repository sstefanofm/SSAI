const Track = ({ track, fromAlbum = false, order = -1 }) => {
  return (
    <div>
      {fromAlbum && <div>{order}</div>}
      {!fromAlbum && (
        <img src={track.album.images[1].url} alt={`${track.album.name} album cover`} />
      )}
      <h3>{track.name}</h3>
      <h4>{track.artists[0].name}</h4>
      {track.explicit && <div>explicit</div>}
      <div>{track.duration_ms}</div>
    </div>
  )
}

export default Track
