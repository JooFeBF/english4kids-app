import './App.css'
import Home from './pages/home'
import MemoryGame from './pages/memoryGame'
import { Route } from 'wouter'
import ZooGame from './pages/zooGame'
function App () {
  return (
    <>
      <Route path='/' component={Home} />
      <Route path='/game/memory' component={MemoryGame} />
      <Route path='/game/zoo' component={ZooGame}/>
    </>
  )
}

export default App
