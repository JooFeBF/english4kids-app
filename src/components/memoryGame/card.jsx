import { useEffect, useState, memo } from 'react'
import ImageInfoModals from './imageInfoModals'
import card from './card.module.css'
import cat from '../../assets/images/cardGame/cat.webp'
import dog from '../../assets/images/cardGame/dog.webp'
import elephant from '../../assets/images/cardGame/elephant.webp'
import lion from '../../assets/images/cardGame/lion.webp'
import red from '../../assets/images/cardGame/red.webp'
import green from '../../assets/images/cardGame/green.webp'
import blue from '../../assets/images/cardGame/blue.webp'

const cardImages = {
  cat,
  dog,
  lion,
  elephant,
  red,
  green,
  blue
}

const Card = ({ setFlippedCards, name, pairs = [], flippedCards, incorrectFlippedCards = [] }) => {
  const [flip, setFlip] = useState(false)
  const [openExplanationModal, setOpenExplanationModal] = useState(false)
  const nameWithoutIndex = name.split('', name.length - 2).join('')

  const handleClick = () => {
    if (flippedCards.length < 2) {
      setFlip(true)
      setFlippedCards(prevFlippedCards => {
        return [...prevFlippedCards, name]
      })
    }
  }

  const getLastPairs = () => {
    const lastPairs = [pairs[pairs.length - 1], pairs[pairs.length - 2]]
    if (lastPairs[0] === name || lastPairs[1] === name) return true
    return false
  }

  useEffect(() => {
    if (!pairs.includes(name) && flippedCards.length === 0) setFlip(false)
    if (getLastPairs()) {
      setTimeout(() => {
        setOpenExplanationModal(true)
      }, 500)
    }
  }, [pairs, flippedCards])

  return (
    <div className={`${card['card-container']} ${incorrectFlippedCards.includes(name) ? card['incorrect-card'] : null} ${flip && !pairs.includes(name) ? `${card['flipped-card-back']}` : null} ${getLastPairs() ? `${card['correct-card']}` : null}`}>
      {
        flip
          ? <img src={cardImages[nameWithoutIndex]} className={`${flip ? card['flipped-card-front'] : null} ${incorrectFlippedCards.includes(name) ? `${card['incorrect-card-front']}` : null}`} alt="cat" />
          : <button className={`${card['card-blank-side']} ${incorrectFlippedCards.includes(name) ? `${card['incorrect-card-front']}` : null}`} onClick={handleClick}>?</button>
      }
      {
        openExplanationModal ? <ImageInfoModals img={cardImages[nameWithoutIndex]} word={nameWithoutIndex}/> : null
      }
    </div>
  )
}
export default memo(Card)
