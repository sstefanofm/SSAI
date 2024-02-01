import { useState } from 'react'
import { Link, useRoutes } from 'react-router-dom'

import './App.css'
import TokenProvider from './context/TokenProvider'
import { TrackContext } from './context/TrackContext'
import { routes } from './pages/routes'
import Search from './components/Search'
import Track from './components/Track'
import Navbar from './components/Navbar'

function App() {
  const [track, setTrack] = useState({})

  return (
    <TokenProvider>
      <TrackContext.Provider value={{ track, setTrack }}>
        <Navbar />
        <Search />
        <Link to='/artists'>
          <h3>GoToArtists</h3>
        </Link>
        {useRoutes(routes)}
      </TrackContext.Provider>
    </TokenProvider>
  )
}

export default App
