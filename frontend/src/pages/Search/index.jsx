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
  const currentPage = +searchParams.get('p') || 1

  useEffect(() => {
    if (searchString && searchType)
      SearchService.run(token, searchString, searchType, currentPage)
        .then(result =>
          setSearchedElements(result[searchType + 's'])
        )
  }, [searchString, searchType, currentPage])

  if (searchString && searchType)
    return (
      <div>
        <MainTitle>Search for {searchType}s with &quot;{searchString}&quot;</MainTitle>
        <List
          elements={searchedElements?.items}
          oneLine={searchType === 'track'}
          isAlbumView={false}
        />
        <div>
          <button>&lt;</button>
          <button>{currentPage}</button>
          <button>&gt;</button>
        </div>
      </div>
    )
  return <MainTitle>Looking for something?</MainTitle>
}

export default Search
