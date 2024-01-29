const url = 'https://api.spotify.com/v1/artists'

const ArtistService = {
  get: async token => {
    return await (
      await fetch(
        `${url}?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6`,
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        },
      )
    ).json()
  },
  getOne: async (token, id) => {
    return await (
      await fetch(`${url}/${id}`, { headers: { Authorization: 'Bearer ' + token } })
    ).json()
  },
  getTopTracks: async (token, id) => {
    return await (
      await fetch(`${url}/${id}/top-tracks?market=AR`, {
        headers: { Authorization: 'Bearer ' + token },
      })
    ).json()
  },
  getAlbums: async (token, id) => {
    return await (
      await fetch(`${url}/${id}/albums?market=AR&include_groups=album&limit=50`, {
        headers: { Authorization: 'Bearer ' + token },
      })
    ).json()
  },
}

export default ArtistService
