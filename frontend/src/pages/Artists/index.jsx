import { useState, useEffect, useContext } from 'react'

import ArtistService from '../../services/ArtistService'
import { TokenContext } from '../../context/TokenProvider'
import List from '../../components/List'

const Artists = () => {
  const token = useContext(TokenContext)

  const [artists, setArtists] = useState([])

  useEffect(() => {
    const fetchArtists = async () => {
      const { artists } = await ArtistService.get(token)

      setArtists(artists)
    }

    fetchArtists()
  }, [])

  return (
    <>
      <h2>Artists</h2>
      <List elements={artists} />
    </>
  )
}

export default Artists
