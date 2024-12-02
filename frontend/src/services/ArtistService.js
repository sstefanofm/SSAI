import { artistsIds } from '../data/artists'
import { fetchJson } from './fetch'
import { formatUrlEncodedIds } from '../util/formatUrlEncodedIds'
import { formatObjectToCSString } from '../util/formatObjectToCSString'

const endpoint = 'artists'

const ArtistService = {
  /* artistsIds: hardcoded data */
  get: token => fetchJson(`${endpoint}?ids=${formatObjectToCSString(artistsIds)}`, token),
  getOne: (token, id) => fetchJson(`${endpoint}/${id}`, token),
  getTopTracks: (token, id) => fetchJson(`${endpoint}/${id}/top-tracks?market=AR`, token),
  getAlbums: (token, id) =>         /* TODO get specific user market */
    fetchJson(`${endpoint}/${id}/albums?market=AR&include_groups=album&limit=50`, token),
}

export default ArtistService
