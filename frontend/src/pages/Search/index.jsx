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
  const [page, setPage] = useState(+searchParams.get('p') || 1)

  const searchString = searchParams.get('q')?.trim() || ''

  useEffect(() => {
    if (searchString && searchType)
      SearchService.run(token, searchString, searchType, page)
        .then(result =>
          setSearchedElements(result[searchType + 's'])
        )
  }, [searchString, searchType, page])

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
          {page > 1 ?
            <button onClick={() => setPage(page - 1)}>&lt;</button>
            : <></>
          }
          <button>{page}</button>
          <button onClick={() => setPage(page + 1)}>&gt;</button>
        </div>
      </div>
    )
  return <MainTitle>Looking for something?</MainTitle>
}

export default Search
