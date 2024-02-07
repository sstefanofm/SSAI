import { fetchJson } from './fetch'

const endpoint = 'albums'

const AlbumService = {
  get: async token => console.log('albumservice Bearer ' + token),
  // get: async token => fetchJson(`${endpoint}/`, token),
  getOne: async (token, id) => fetchJson(`${endpoint}/${id}`, token),
}

export default AlbumService
