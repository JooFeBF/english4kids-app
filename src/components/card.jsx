import { useEffect, useState } from 'react'
import card from './card.module.css'
import cat from '../assets/images/cardGame/cat.png'
import dog from '../assets/images/cardGame/dog.png'
import elephant from '../assets/images/cardGame/elephant.png'
import lion from '../assets/images/cardGame/lion.png'

const animalImages = {
  cat,
  dog,
  lion,
  elephant
}

const Card = ({ setFlippedCards, name, pairs, flippedCards }) => {
  const [flip, setFlip] = useState(false)
  const nameWithoutIndex = name.split('', name.length - 2).join('')
  const handleClick = () => {
    setFlippedCards(prevFlippedCards => {
      setFlip(true)
      return [...prevFlippedCards, name]
    })
  }

  useEffect(() => {
    if (!pairs.includes(name) && flippedCards.length === 0) setFlip(false)
  }, [pairs, flippedCards])

  return (
    <>
      {
        flip
          ? <div className={card['image-container']}><img src={animalImages[nameWithoutIndex]} alt="cat" /></div>
          : <button className={flip ? card['card-flipped'] : null } onClick={handleClick}>{name}</button>
      }
    </>
  )
}
export default Card
