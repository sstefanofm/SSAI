import { useState, useEffect, useContext } from 'react'

import { TokenContext } from '../../context/TokenProvider'
import List from '../../components/List'
import MainTitle from '../../components/MainTitle'

const Likes = ({ Service, title = '' }) => {
  const token = useContext(TokenContext)

  const [data, setData] = useState([])

  useEffect(() => {
    try {
      if (!Service || !Object.keys(Service).length)
        return
    } catch { return }

    const fetchData = async () => {
      const data = await Service.get(token)

      setData(data[`${title.toLowerCase()}`])
    }

    fetchData()
  }, [])

  return (
    <>
      <MainTitle>{title}</MainTitle>
      <List elements={data} />
    </>
  )
}

export default Likes
