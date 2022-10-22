import './App.css'
import Home from './pages/home'
import MemoryGame from './pages/memoryGame'
import { Route } from 'wouter'
import ZooGame from './pages/zooGame'
import ColorGame from './pages/colorGame'
function App () {
  return (
    <div>
      <Route path='/' component={Home} />
      <Route path='/game/memory' component={MemoryGame} />
      <Route path='/game/zoo' component={ZooGame}/>
      <Route path='/game/color' component={ColorGame}/>
    </div>
  )
}

export default App
