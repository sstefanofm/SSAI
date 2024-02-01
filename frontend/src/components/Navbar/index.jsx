import Track from '../Track'

const Navbar = () => {
  return (
    <div>
      <h1>SSAI</h1>
      <Track />
      <nav>
        <button>Albums</button>
        <button>Artists</button>
        <button>Tracks</button>
      </nav>
    </div>
  )
}

export default Navbar
