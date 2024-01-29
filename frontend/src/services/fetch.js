const url = 'https://api.spotify.com/v1'

export const fetchJson = async (endpoint = '', token = '') => {
  return await (
    await fetch(`${url}/${endpoint}`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
  ).json()
}
