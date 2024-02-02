import { Link } from 'react-router-dom'

import './Navbar.css'
import viteLogo from '../../assets/vite.svg'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='Logo'>
        <img src={viteLogo} />
        <h1>SSAI</h1>
      </div>
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
