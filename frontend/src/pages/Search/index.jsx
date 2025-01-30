import { useLocation } from 'react-router-dom'

import List from '../../components/List'
import MainTitle from '../../components/MainTitle'
import { capitalize } from '../../util/capitalize'
import { getUrlQueryParamValue } from '../../util/getUrlQueryParamValue'

const Search = () => {
  const { state } = useLocation()

  const elementType = Object.keys(state)[0]

  let title = Object.keys(state)[0]
  let searchString = getUrlQueryParamValue(
    state[title].href,
    'query'
  )

  return (
    <div>
      <MainTitle>Search for {title} with &quot;{searchString}&quot;</MainTitle>
      <h3>{capitalize(title)}</h3>
      <List elements={state[elementType].items} />
    </div>
  )
}

export default Search
