import { fetchJson } from './fetch'
import { formatUrlEncodedIds } from '../data/artists'

const endpoint = 'artists'

const ArtistService = {
  get: token => fetchJson(
    /* hardcoded */
    `${endpoint}?ids=${formatUrlEncodedIds()}`,
    token,
  ),
  getOne: (token, id) => fetchJson(
    `${endpoint}/${id}`,
    token,
  ),
  getTopTracks: (token, id) => fetchJson(
    `${endpoint}/${id}/top-tracks?market=AR`,
    token,
  ),
  getAlbums: (token, id) => fetchJson(
    `${endpoint}/${id}/albums?market=AR&include_groups=album&limit=50`,
    token,
  ),
}

export default ArtistService
