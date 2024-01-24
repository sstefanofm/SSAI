import './App.css'
import TokenProvider from './context/TokenProvider'
import Artists from './components/Artists'

function App() {
  return (
    <TokenProvider>
      <Artists />
    </TokenProvider>
  )
}

export default App
