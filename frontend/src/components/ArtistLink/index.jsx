import { Link } from 'react-router-dom'
import { IconPerson } from '../Icon'

const ArtistLink = ({ artist }) => (
  <Link to={`/artists/${artist.id}`}>
    {artist.images.length ? (
      <img src={artist.images[0].url} alt={`${artist.name} profile picture`} />
    ) : (
      <IconPerson size={640} />
    )}
    <h4>{artist.name}</h4>
  </Link>
)

export default ArtistLink
