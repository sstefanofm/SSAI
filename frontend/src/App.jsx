import { useRoutes } from 'react-router-dom'

import './App.css'
import TokenProvider from './context/TokenProvider'
import TrackProvider from './context/TrackProvider'
import { routes } from './pages/routes'
import Search from './components/Search'
import TrackPlayer from './components/TrackPlayer'
import Navbar from './components/Navbar'

function App() {
  return (
    <TokenProvider>
      <TrackProvider>
        <Search />
        <Navbar />
        {useRoutes(routes)}
        <TrackPlayer />
        <div className='HiddenFooter' />
      </TrackProvider>
    </TokenProvider>
  )
}

export default App
