import { fetchJson } from './fetch'

const endpoint = 'albums'

const AlbumService = {
  getOne: async (token, id) => fetchJson(
    `${endpoint}/${id}`,
    token,
  ),
}

export default AlbumService
