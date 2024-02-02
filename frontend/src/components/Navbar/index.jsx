import { useState } from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'
import viteLogo from '../../assets/vite.svg'
import { IconList, IconBurger } from '../Icon'

const Navbar = () => {
  const [hidden, setHidden] = useState(false)

  return (
    <div className='Navbar'>
      <div className='Logo'>
        <img src={viteLogo} />
        <h1>SSAI</h1>
      </div>
      <div>
        <button className='Navbar__BurgerButton' onClick={() => setHidden(!hidden)}>
          {hidden ? <IconList size={30} /> : <IconBurger size={30} />}
        </button>
        <nav hidden={hidden} className='Navbar__Links'>
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
    </div>
  )
}

export default Navbar
