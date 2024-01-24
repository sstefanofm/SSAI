import { Link, useRoutes } from 'react-router-dom'

import './App.css'
import TokenProvider from './context/TokenProvider'
import { routes } from './routes'

function App() {
  return (
    <TokenProvider>
      <Link to='/artists'>
        <h3>GoToArtists</h3>
      </Link>
      {useRoutes(routes)}
    </TokenProvider>
  )
}

export default App
