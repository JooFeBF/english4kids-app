import bars from '../assets/images/bars-solid.svg'
import gameNavBar from './gameNavBar.module.css'

const GameNavBar = ({ score, setOpenMenu }) => {
  return (
    <div className={gameNavBar.nav}>
      {
        score !== undefined && score !== null ? <p>Puntos {score}</p> : <p></p>
      }
      <button onClick={() => setOpenMenu(true)}><img src={bars} alt="menu" /></button>
    </div>
  )
}

export default GameNavBar
