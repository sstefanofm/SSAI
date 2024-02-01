import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <h1>SSAI</h1>
      <nav className='Navbar__Links'>
        <Link to='/albums'>
          <button>Albums</button>
        </Link>
        <Link to='/artists'>
          <button>Artists</button>
        </Link>
        <Link to='/tracks'>
          <button>Tracks</button>
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
