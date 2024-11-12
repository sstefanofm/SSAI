import './CustomNavLink.css'
import { NavLink } from 'react-router-dom'

const CustomNavLink = ({ to = '', text = '' }) => {
  return (
    <NavLink to={to}>
      <h4 className='CustomNavLink__Text'>{text}</h4>
    </NavLink>
  )
}

export default CustomNavLink
