import Artists from './components/Artists'
import NotFound from './components/NotFound'

export const routes = [
  {
    path: '/artists',
    element: <Artists />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]
