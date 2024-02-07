import { fetchJson } from './fetch'
import { formatUrlEncodedIds } from '../util/formatUrlEncodedIds'
import { albumIds } from '../data/album'

const endpoint = 'albums'

const AlbumService = {
  /* albumIds: hardcoded data */
  get: async token => fetchJson(`${endpoint}?ids=${formatUrlEncodedIds(albumIds)}`, token),
  getOne: async (token, id) => fetchJson(`${endpoint}/${id}`, token),
}

export default AlbumService
