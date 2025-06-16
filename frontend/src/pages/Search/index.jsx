import { useLocation, useSearchParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'

import List from '../../components/List'
import MainTitle from '../../components/MainTitle'
import { TokenContext } from '../../context/TokenProvider'
import SearchService from '../../services/SearchService'

const Search = () => {
  const [searchedElements, setSearchedElements] = useState({})
  const searchType = useLocation().state
  const token = useContext(TokenContext)
  const [searchParams] = useSearchParams()

  const searchString = searchParams.get('q')?.trim() || ''

  useEffect(() => {
    SearchService.run(token, searchString, searchType)
      .then(result =>
        setSearchedElements(result[searchType + 's'])
      )
  }, [searchString, searchType])

  return (
    <div>
      <MainTitle>Search for {searchType}s with &quot;{searchString}&quot;</MainTitle>
      <List
        elements={searchedElements?.items}
        oneLine={searchType === 'track'}
        isAlbumView={false}
      />
    </div>
  )
}

export default Search
