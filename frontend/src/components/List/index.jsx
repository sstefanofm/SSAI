import Link from '../Link'

const List = ({ elements = [] }) => {
  return (
    <div>
      {elements.map(e => (
        <Link key={e.id} element={e} type={e.type} />
      ))}
    </div>
  )
}

export default List
