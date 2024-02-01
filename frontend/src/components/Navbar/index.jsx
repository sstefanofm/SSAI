import { Link } from 'react-router-dom'

import './Navbar.css'
import Track from '../Track'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <h1>SSAI</h1>
      <Track />
      <nav>
        <button>Albums</button>
        <Link to='/artists'>
          <button>Artists</button>
        </Link>
        <button>Tracks</button>
      </nav>
    </div>
  )
}

export default Navbar
