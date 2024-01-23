import { useState } from 'react'
import './App.css'

const getToken = async () => await (await fetch('http://localhost:8080')).json()

function App() {
  const [token, setToken] = useState('')

  return (
    <>
      <button onClick={async () => setToken((await getToken()).access_token)}>get token</button>
      <p>{token}</p>
    </>
  )
}

export default App
