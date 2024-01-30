import Link from '../Link'

const ArtistList = ({ artists = [] }) => (
  <div>
    {artists.map(a => (
      <Link key={a.id} element={a} type='artist' />
    ))}
  </div>
)

export default ArtistList
