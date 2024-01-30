import ArtistLink from '../ArtistLink'

const ArtistList = ({ artists = [] }) => (
  <div>
    {artists.map(a => (
      <ArtistLink key={`${a.id}${a.name}`} artist={a} />
    ))}
  </div>
)

export default ArtistList
