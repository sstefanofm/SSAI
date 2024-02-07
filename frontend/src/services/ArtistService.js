import { artistsIds } from '../data/artists'
import { fetchJson } from './fetch'
import { formatUrlEncodedIds } from '../util/formatUrlEncodedIds'

const endpoint = 'artists'

const ArtistService = {
  /* artistsIds: hardcoded data */
  get: token => fetchJson(`${endpoint}?ids=${formatUrlEncodedIds(artistsIds)}`, token),
  getOne: (token, id) => fetchJson(`${endpoint}/${id}`, token),
  getTopTracks: (token, id) => fetchJson(`${endpoint}/${id}/top-tracks?market=AR`, token),
  getAlbums: (token, id) =>
    fetchJson(`${endpoint}/${id}/albums?market=AR&include_groups=album&limit=50`, token),
}

export default ArtistService
