import Artists from './components/Artists'
import NotFound from './components/NotFound'
import Artist from './pages/Artist'

export const routes = [
  {
    path: '/artists',
    element: <Artists />,
  },
  {
    path: '/artist',
    element: <Artist />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]
