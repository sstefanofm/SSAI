import { useLocation, useSearchParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'

import List from '../../components/List'
import MainTitle from '../../components/MainTitle'
import { TokenContext } from '../../context/TokenProvider'
import SearchService from '../../services/SearchService'

const scrollTop = () => window.scrollTo({
  top: 0,
  behavior: 'smooth'
})

const savePageNumber = (pageNumber) =>
  localStorage.setItem('previousPageNumber', pageNumber)

const Search = () => {
  const [searchedElements, setSearchedElements] = useState({})
  const searchType = useLocation().state
  const token = useContext(TokenContext)
  const [searchParams] = useSearchParams()
  const [page, setPage] = useState(() =>
    +localStorage.getItem('previousPageNumber') || 1
  )

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
            <button onClick={() => {
              setPage(page - 1)
              savePageNumber(page - 1)
              scrollTop()
            }}>&lt;</button>
            : <></>
          }
          <button>{page}</button>
          <button onClick={() => {
            setPage(page + 1)
            savePageNumber(page + 1)
            scrollTop()
          }}>&gt;</button>
        </div>
      </div>
    )
  return <MainTitle>Looking for something?</MainTitle>
}

export default Search
