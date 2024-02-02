import './List.css'
import Link from '../Link'

const List = ({ elements = [] }) => {
  return (
    <div className='List'>
      {elements.map(e => (
        <Link key={e.id} element={e} type={e.type} />
      ))}
    </div>
  )
}

export default List
