import TrackList from '../TrackList'

const AlbumRC = ({ album }) => {
  return (
    <div>
      <h2>{album.name}</h2>
      <img src={album.images[0].url} alt={`${album.name} album cover`} />
      <TrackList tracks={album.tracks.items} fromAlbum={true} />
    </div>
  )
}

export default AlbumRC
