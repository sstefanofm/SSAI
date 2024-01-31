import Track from '../Track'

const TrackList = ({ tracks = [], fromAlbum = false }) => {
  return (
    <div>
      {tracks.map(t => (
        <Track key={t.id} track={t} fromAlbum={fromAlbum} />
      ))}
    </div>
  )
}

export default TrackList
