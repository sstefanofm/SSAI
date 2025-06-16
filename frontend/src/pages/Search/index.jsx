import { useLocation, useSearchParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'

import './Search.css'
import List from '../../components/List'
import MainTitle from '../../components/MainTitle'
import { TokenContext } from '../../context/TokenProvider'
import SearchService from '../../services/SearchService'
import { IconCaretRight } from '../../components/Icon'

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
        <div className='Search__NavigationButtons'>
          {page > 1 ?
            <button
              className='Search__NavigationButtons__Button'
              onClick={() => {
                setPage(page - 1)
                savePageNumber(page - 1)
                scrollTop()
              }}
            >
              <IconCaretRight style={{
                transform: 'rotate(180deg)'
              }} />
            </button>
            : <></>
          }
          <div className='Search__NavigationButtons__CurrentPage'>{page}</div>
          <button
            className='Search__NavigationButtons__Button'
            onClick={() => {
              setPage(page + 1)
              savePageNumber(page + 1)
              scrollTop()
            }}
          >
            <IconCaretRight />
          </button>
        </div>
      </div>
    )
  return <MainTitle>Looking for something?</MainTitle>
}

export default Search
