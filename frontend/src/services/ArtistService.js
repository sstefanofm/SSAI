import { fetchJson } from './fetch'

const endpoint = 'artists'

const ArtistService = {
  get: token => fetchJson(
    /* hardcoded */
    `${endpoint}?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6`,
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
