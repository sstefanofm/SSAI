import { useState, useEffect, useContext } from 'react'

import { TokenContext } from '../../context/TokenProvider'
import List from '../../components/List'

const Likes = ({ Service, title = '' }) => {
  const token = useContext(TokenContext)

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await Service.get(token)

      setData(data[`${title.toLowerCase()}`])
    }

    fetchData()
  }, [data])

  return (
    <>
      <h2>{title}</h2>
      <List elements={data} />
    </>
  )
}

export default Likes
