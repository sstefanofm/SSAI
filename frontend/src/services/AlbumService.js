import { albumIds } from '../data/album'
import { fetchJson } from './fetch'
import { formatUrlEncodedIds } from '../util/formatUrlEncodedIds'
import { formatObjectToCSString } from '../util/formatObjectToCSString'

const endpoint = 'albums'

const AlbumService = {
  /* albumIds: hardcoded data */
  get: async token => fetchJson(`${endpoint}?ids=${formatObjectToCSString(albumIds)}`, token),
  getOne: async (token, id) => fetchJson(`${endpoint}/${id}`, token),
}

export default AlbumService
