import { useState } from 'react'
import ContentContainer from '../components/contentContainer'
import finish from './finish.module.css'
import { Link } from 'wouter'
import GameUI from '../components/gameUI'
import GameNavBar from '../components/gameNavBar'
import Menu from '../components/menu'

const Finish = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const totalScore = Number(window.localStorage.getItem('1')) + Number(window.localStorage.getItem('2')) + Number(window.localStorage.getItem('3'))

  return (
    <ContentContainer>
      {
        openMenu ? <Menu isOpen={openMenu} setOpenMenu={setOpenMenu} /> : null
      }
      <GameUI>
        <GameNavBar setOpenMenu={setOpenMenu} />
        <div className={finish['score-container']}>
          <div>
            <div className={finish.filled}></div>
            <div className={totalScore >= 6800 ? `${finish.filled}` : null}></div>
            <div className={totalScore >= 7200 ? `${finish.filled}` : null}></div>
          </div>
          <h4>¡Lo has logrado!</h4>
          <p>Tu puntuación es de:</p>
          <p>{totalScore}</p>
          <Link href='/' onClick={() => { window.localStorage.clear() }}>Volver al principio</Link>
        </div>
      </GameUI>
    </ContentContainer>
  )
}

export default Finish
