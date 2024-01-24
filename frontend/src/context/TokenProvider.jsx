import { createContext, useContext } from 'react'

const getToken = async () => await (await fetch('http://localhost:8080')).json()

export const TokenContext = createContext((await getToken()).access_token)

const TokenProvider = ({ children }) => {
  const token = useContext(TokenContext)

  return <TokenContext.Provider value={token}>{children}</TokenContext.Provider>
}

export default TokenProvider
