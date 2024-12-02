/* NOTE
 * There's no need to use URL-encoded.
 * The Spotify API documentation specifies using a regular comma.
 * The fetch API will automatically handle encoding special chars.
 */

export const formatUrlEncodedIds = (ids = {}) => {
  const length = Object.keys(ids).length

  let str = `${ids[Object.keys(ids)[0]]}%2C`

  for (let i = 1; i < length - 1; ++i)
    str = `${str}${ids[Object.keys(ids)[i]]}%2C`

  str = `${str}${ids[Object.keys(ids)[length - 1]]}`

  return str
}
