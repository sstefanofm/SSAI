import { Link, useRoutes } from 'react-router-dom'

import './App.css'
import TokenProvider from './context/TokenProvider'
import { routes } from './pages/routes'
import Search from './components/Search'

function App() {
  return (
    <TokenProvider>
      <Search />
      <Link to='/artists'>
        <h3>GoToArtists</h3>
      </Link>
      {useRoutes(routes)}
    </TokenProvider>
  )
}

export default App
