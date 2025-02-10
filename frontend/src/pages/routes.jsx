import Likes from './Likes'
import NotFound from './NotFound'
import Artist from './Artist'
import Album from './Album'
import Search from './Search'

import ArtistService from '../services/ArtistService'
import AlbumService from '../services/AlbumService'
import TrackService from '../services/TrackService'

export const routes = [
  {
    path: '/',
    element: <Likes Service={undefined} title='Hello, this is the Home' />
  },
  {
    path: '/artists',
    element: <Likes Service={ArtistService} title='Artists' />,
  },
  {
    path: '/albums',
    element: <Likes Service={AlbumService} title='Albums' />,
  },
  {
    path: '/tracks',
    element: <Likes Service={TrackService} title='Tracks' />,
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
