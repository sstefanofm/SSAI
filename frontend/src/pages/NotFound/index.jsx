import './404.css'

const NotFound = () => (
  <h2>
    The requested URL &nbsp;<code>{location.pathname}</code>&nbsp; does not exist. :(
  </h2>
)

export default NotFound
