import './App.css'
import Home from './pages/home'
import MemoryGame from './pages/memoryGame'
import { Route } from 'wouter'
import ZooGame from './pages/zooGame'
import ColorGame from './pages/colorGame'
import Finish from './pages/finish'
import Video from './pages/video'
function App () {
  return (
    <div>
      <Route path='/' component={Home} />
      <Route path='/game/memory' component={MemoryGame} />
      <Route path='/game/zoo' component={ZooGame}/>
      <Route path='/game/color' component={ColorGame}/>
      <Route path='/finish' component={Finish}/>
      <Route path='/video/:name'>
        {
          ({ name }) => <Video link={name}/>
        }
      </Route>
    </div>
  )
}

export default App
