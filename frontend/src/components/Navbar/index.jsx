import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'
import viteLogo from '../../assets/vite.svg'
import { IconList, IconBurger } from '../Icon'

const Navbar = () => {
  const [hidden, setHidden] = useState(true)
  const burgerButtonRef = useRef(null)
  const burgerMenuRef = useRef(null)

  useEffect(() => {
    const closeMenuIfClickOutside = event => {
      if (
        !burgerButtonRef.current.contains(event.target)
        && !burgerMenuRef.current.contains(event.target)
      ) setHidden(true)
    }

    document.addEventListener(
      'mousedown',
      closeMenuIfClickOutside
    )

    return () => document.removeEventListener(
      'mousedown',
      closeMenuIfClickOutside
    )
  }, [hidden])

  return (
    <div className='Navbar'>
      <div className='Logo'>
        <img src={viteLogo} />
        <h1><Link to='/'>SSAI</Link></h1>
      </div>
      <div>
        <button
          className='Navbar__BurgerButton'
          onClick={() => setHidden(!hidden)}
          ref={burgerButtonRef}
        >
          {hidden ? <IconList size={20} /> : <IconBurger size={20} />}
        </button>
        <nav
          hidden={hidden}
          className='Navbar__Links'
          ref={burgerMenuRef}
        >
          <Link className='A' to='/albums'>
            <button>Albums</button>
          </Link>
          <Link className='A' to='/artists'>
            <button>Artists</button>
          </Link>
          <Link className='A' to='/tracks'>
            <button>Tracks</button>
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
