const url = 'https://api.spotify.com/v1/artists'

const ArtistService = {
  get: async token => {
    return await (
      await fetch(`${url}?ids=2CIMQHirSU0MQqyYHq0eOx`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
    ).json()
  },
}

export default ArtistService
