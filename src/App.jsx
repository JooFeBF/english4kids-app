import './App.css'
import Home from './pages/home'
import MemoryGame from './pages/memoryGame'
import { Route } from 'wouter'
function App () {
  return (
    <>
      <Route path='/' component={Home} />
      <Route path='/game/memory' component={MemoryGame} />
    </>
  )
}

export default App
