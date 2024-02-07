import { fetchJson } from './fetch'
import { formatUrlEncodedIds } from '../util/formatUrlEncodedIds'

const endpoint = 'albums'

const AlbumService = {
  get: async token => fetchJson(`${endpoint}`),
  getOne: async (token, id) => fetchJson(`${endpoint}/${id}`, token),
}

export default AlbumService
