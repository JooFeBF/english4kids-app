import { useEffect, useState } from 'react'
import Card from '../components/memoryGame/card'
import GameContainer from '../components/gameContainer'
import memoryGame from './memoryGame.module.css'
import NextLevelModal from '../components/nextLevelModal'
import bars from '../assets/images/bars-solid.svg'
import Menu from '../components/menu'
const initialCards = [
  'red-1', 'red-2', 'blue-1', 'blue-2', 'green-1', 'green-2',
  'dog-1', 'dog-2', 'cat-1', 'cat-2', 'elephant-1', 'elephant-2'
]

const cards = initialCards.sort(() => Math.random() - 0.5)

let totalScore = 1000

const scoreByTime = setInterval(() => {
  if (totalScore > 200) totalScore -= 100
}, 25000)

const MemoryGame = () => {
  const [flippedCards, setFlippedCards] = useState([])
  const [pairs, setPairs] = useState([])
  const [incorrectFlippedCards, setIncorrectFlippedCards] = useState([])
  const [win, setWin] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    if (flippedCards.length === 2) {
      const comparisonCards = flippedCards.map(card => card.split('', card.length - 2).join(''))
      if (comparisonCards[0] === comparisonCards[1]) {
        setTimeout(() => {
          setPairs(prevPairs => [...prevPairs, ...flippedCards])
        }, 1000)
        setTimeout(() => {
          setFlippedCards([])
        }, 1500)
      } else {
        setTimeout(() => {
          setIncorrectFlippedCards([...flippedCards])
        }, 1000)
        setTimeout(() => {
          setIncorrectFlippedCards([])
          setFlippedCards([])
        }, 2000)
      }
    }
  }, [flippedCards])

  useEffect(() => {
    if (pairs.length === initialCards.length) {
      clearInterval(scoreByTime)
      window.localStorage.setItem('globalScore', totalScore.toString())
      setTimeout(() => {
        setWin(true)
      }, 7350)
    }
  }, [pairs])

  return (
    <GameContainer title={'Encuentra todas las parejas'} subtitle={'Haz click en las cartas y acaba rápido para mayor puntuación'} >
      {
        win ? <NextLevelModal totalScore={totalScore}/> : null
      }
      {
        openMenu ? <Menu isOpen={openMenu} setOpenMenu={setOpenMenu}/> : null
      }
      <div className={memoryGame['game-UI']}>
        <div className={memoryGame.header}>
            <p>Puntos {totalScore}</p>
            <button onClick={() => setOpenMenu(true)}><img src={bars} alt="menu" /></button>
        </div>
        <div className={memoryGame['card-container']}>
          {
            cards.map(card => <Card key={card} name={card} setFlippedCards={setFlippedCards} flippedCards={flippedCards} pairs={pairs} incorrectFlippedCards={incorrectFlippedCards} />)
          }
        </div>
      </div>
    </GameContainer>
  )
}

export default MemoryGame
