import { tracksIds } from '../data/tracks'
import { formatUrlEncodedIds } from '../util/formatUrlEncodedIds'
import { fetchJson } from './fetch'

const endpoint = 'tracks'

const TrackService = {
  get: async token => fetchJson(`${endpoint}?ids=${formatUrlEncodedIds(tracksIds)}`, token),
}

export default TrackService
