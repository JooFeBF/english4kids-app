import gameUI from './gameUI.module.css'

const GameUI = ({ children }) => {
  return (
    <div className={gameUI['game-UI']}>
      { children }
    </div>
  )
}

export default GameUI
