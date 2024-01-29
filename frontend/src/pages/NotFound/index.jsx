import './404.css'

const NotFound = () => (
  <h1>
    The requested URL &nbsp;<code>{location.pathname}</code>&nbsp; does not exist. :(
  </h1>
)

export default NotFound
