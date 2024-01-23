import { useState } from 'react'
import './App.css'

import Artists from './components/Artists'

const getToken = async () => await (await fetch('http://localhost:8080')).json()

function App() {
  const [token, setToken] = useState('')

  return (
    <>
      <button onClick={async () => setToken((await getToken()).access_token)}>get token</button>
      <p>{token}</p>

      {token && <Artists token={token} />}
    </>
  )
}

export default App
