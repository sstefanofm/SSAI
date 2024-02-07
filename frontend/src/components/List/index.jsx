import './List.css'
import Link from '../Link'
import TrackLink from '../Link/TrackLink'

const List = ({ elements = [] }) => {
  return (
    <div className='List'>
      {elements.map(e =>
        e.type === 'track' ? (
          <TrackLink key={e.id} trackElement={e} />
        ) : (
          <Link key={e.id} element={e} />
        ),
      )}
    </div>
  )
}

export default List
