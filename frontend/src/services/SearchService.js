import { fetchJson } from './fetch'

const endpoint = 'search'

const SearchService = {
  run: (token = '', searchString = '', type = 'album', pageNumber = 1) => fetchJson(
    `${endpoint}?q=${searchString}&type=${type}&market=AR&limit=20&offset=${(pageNumber - 1) * 20}`,
    token,
  ),
}

export default SearchService
