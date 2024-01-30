import Artists from './Artists'
import NotFound from './NotFound'
import Artist from './Artist'
import Album from './Album'
import Search from './Search'

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
    path: '/search',
    element: <Search />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]
