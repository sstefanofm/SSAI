import Artists from './Artists'
import NotFound from './NotFound'
import Artist from './Artist'

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
