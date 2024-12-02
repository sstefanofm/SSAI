import { tracksIds } from '../data/tracks'
import { fetchJson } from './fetch'
import { formatUrlEncodedIds } from '../util/formatUrlEncodedIds'
import { formatObjectToCSString } from '../util/formatObjectToCSString'

const endpoint = 'tracks'

const TrackService = {
  get: async token => fetchJson(`${endpoint}?ids=${formatObjectToCSString(tracksIds)}`, token),
}

export default TrackService
