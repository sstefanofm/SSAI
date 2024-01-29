import Artists from './components/Artists'
import NotFound from './components/NotFound'
import Artist from './pages/Artist'

export const routes = [
  {
    path: '/artists',
    element: <Artists />,
  },
  {
    path: '/artists/:id',
    element: <Artist />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]
