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
}

export default ArtistService
