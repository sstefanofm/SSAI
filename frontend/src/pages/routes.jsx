import Artists from './Artists'
import NotFound from './NotFound'
import Artist from './Artist'
import Album from './Album'

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
    path: '/albums/:id',
    element: <Album />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]
