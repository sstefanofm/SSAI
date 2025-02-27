import { createContext, useContext } from 'react'

export const TrackContext = createContext(null)

const TrackProvider = ({ children }) => {
  const track = useContext(TrackContext)

  return <TrackContext.Provider value={track}>{children}</TrackContext.Provider>
}

export default TrackProvider
