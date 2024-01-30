import { fetchJson } from './fetch'

const endpoint = 'search'

const SearchService = {
  run: (token = '', searchString = '', type = 'album') => fetchJson(
    `${endpoint}?q=${searchString}&type=${type}&market=AR`,
    token,
  ),
}

export default SearchService
