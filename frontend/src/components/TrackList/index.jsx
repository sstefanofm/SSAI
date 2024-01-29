import Track from '../Track'

const TrackList = ({ tracks = [], fromAlbum = false }) => {
  return (
    <div>
      {tracks.map((t, i) => (
        <Track
          key={`${t.id}${t.name}`}
          track={t}
          fromAlbum={fromAlbum}
          order={fromAlbum && i + 1}
        />
      ))}
    </div>
  )
}

export default TrackList
