import { useContext, useEffect } from 'react'

import ArtistService from '../../services/ArtistService'
import { TokenContext } from '../../context/TokenProvider'

const Artist = () => {
  const token = useContext(TokenContext)

  const id = '0TnOYISbd1XYRBk9myaseg'

  useEffect(() => {
    const fetchArtist = async () => {
      const artist = await ArtistService.getOne(token, id)

      console.log(artist)
    }

    fetchArtist()
  })

  return <>{id}</>
}

export default Artist
