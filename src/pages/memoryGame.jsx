import { useEffect, useState } from 'react'
import Card from '../components/memoryGame/card'
import GameContainer from '../components/gameContainer'
import memoryGame from './memoryGame.module.css'
import NextLevelModal from '../components/nextLevelModal'
import Menu from '../components/menu'
import GameUI from '../components/gameUI'
import GameNavBar from '../components/gameNavBar'
const initialCards = [
  'red-1', 'red-2', 'blue-1', 'blue-2', 'green-1', 'green-2',
  'dog-1', 'dog-2', 'cat-1', 'cat-2', 'elephant-1', 'elephant-2'
]

const cards = initialCards.sort(() => Math.random() - 0.5)

let timeScore = 1000
let pause = false

const scoreByTime = setInterval(() => {
  if (timeScore > 0 && !pause) timeScore -= 100
}, 40000)

const MemoryGame = () => {
  const [flippedCards, setFlippedCards] = useState([])
  const [pairs, setPairs] = useState([])
  const [incorrectFlippedCards, setIncorrectFlippedCards] = useState([])
  const [win, setWin] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [score, setScore] = useState(0)

  useEffect(() => {
    if (flippedCards.length === 2) {
      const comparisonCards = flippedCards.map(card => card.split('', card.length - 2).join(''))
      if (comparisonCards[0] === comparisonCards[1]) {
        setTimeout(() => {
          setScore(prevScore => prevScore + 100)
          setPairs(prevPairs => [...prevPairs, ...flippedCards])
        }, 1000)
        setTimeout(() => {
          setFlippedCards([])
        }, 1500)
        setTimeout(() => {
        }, 6000)
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
    openMenu
      ? pause = true
      : pause = false
  }, [openMenu])

  useEffect(() => {
    if (pairs.length === initialCards.length) {
      clearInterval(scoreByTime)
      setTimeout(() => {
        setWin(true)
      }, 7350)
    }
  }, [pairs])

  return (
    <GameContainer title={'Encuentra todas las parejas'} subtitle={'Haz click en las cartas y acaba rápido para mayor puntuación'} >
      {
        win ? <NextLevelModal score={score} timeScore={timeScore} video={'zoo'} actualLevel={1}/> : null
      }
      {
        openMenu ? <Menu isOpen={openMenu} setOpenMenu={setOpenMenu}/> : null
      }
      <GameUI>
        <GameNavBar score={score} setOpenMenu={setOpenMenu}/>
        <div className={memoryGame['card-container']}>
          {
            cards.map(card => <Card key={card} name={card} setFlippedCards={setFlippedCards} flippedCards={flippedCards} pairs={pairs} incorrectFlippedCards={incorrectFlippedCards} />)
          }
        </div>
      </GameUI>
    </GameContainer>
  )
}

export default MemoryGame
