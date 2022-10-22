import bars from '../assets/images/bars-solid.svg'
import gameNavBar from './gameNavBar.module.css'

const GameNavBar = ({ score, setOpenMenu }) => {
  return (
    <div className={gameNavBar.nav}>
      <p>Puntos {score}</p>
      <button onClick={() => setOpenMenu(true)}><img src={bars} alt="menu" /></button>
    </div>
  )
}

export default GameNavBar
