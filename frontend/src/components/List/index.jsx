import './List.css'
import Link from '../Link'
import Track from '../Track'
/* deprecated TrackLink */
// import TrackLink from '../Link/TrackLink'

const List = ({ elements = [], oneLine = false }) => {
  return (
    <div className={`List List--${oneLine ? 'OneLine' : 'Columns'}`}>
      {elements.map(e =>
        e.type === 'track' ? (
          <Track key={e.id} trackElement={e} />
        ) : (
          <Link key={e.id} element={e} />
        ),
      )}
    </div>
  )
}

export default List
