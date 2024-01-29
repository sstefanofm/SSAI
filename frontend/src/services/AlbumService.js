const url = 'https://api.spotify.com/v1/albums'

const AlbumService = {
  getOne: async (token, id) => {
    return await (
      await fetch(`${url}/${id}`, { headers: { Authorization: 'Bearer ' + token } })
    ).json()
  },
}

export default AlbumService
