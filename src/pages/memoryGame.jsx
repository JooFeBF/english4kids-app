import { useEffect, useState } from 'react'
import Card from '../components/card'
import GameContainer from '../components/gameContainer'
import memoryGame from './memoryGame.module.css'

const initialCards = [
  'red-1', 'red-2', 'blue-1', 'blue-2', 'green-1', 'green-2',
  'dog-1', 'dog-2', 'cat-1', 'cat-2', 'elephant-1', 'elephant-2'
]

const cards = initialCards.sort(() => Math.random() - 0.5)

const MemoryGame = () => {
  const [flippedCards, setFlippedCards] = useState([])
  const [pairs, setPairs] = useState([])
  useEffect(() => {
    if (flippedCards.length === 2 && flippedCards[0] !== flippedCards[1]) {
      const comparisonCards = flippedCards.map(card => card.split('', card.length - 2).join(''))
      if (comparisonCards[0] === comparisonCards[1]) {
        setPairs(prevPairs => [...prevPairs, ...flippedCards])
        setFlippedCards([])
      } else {
        setFlippedCards([])
      }
    }
  }, [flippedCards])

  return (
    <GameContainer message={'Encuentra todas las parejas'}>
      <div className={memoryGame['game-UI']}>
        <div className={memoryGame['card-container']}>
          {
            cards.map(card => <Card key={card} name={card} setFlippedCards={setFlippedCards} flippedCards={flippedCards} pairs={pairs} />)
          }
        </div>
      </div>
    </GameContainer>
  )
}

export default MemoryGame
