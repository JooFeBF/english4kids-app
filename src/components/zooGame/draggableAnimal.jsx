import { useRef, useEffect } from 'react'
import draggableAnimal from './draggableAnimal.module.css'

const handleDrag = (e) => {
  e.dataTransfer.setData('text/plain', e.target.id)
}

const getRandomSign = () => {
  return Math.random() <= 0.5 ? '-' : ''
}

const DraggableAnimal = ({ id, img, returnedAnimals }) => {
  const elementRef = useRef()

  const getRandomTranslationY = () => {
    const randomPosition = Math.floor(Math.random() * (elementRef.current?.parentElement.offsetHeight - 100)) / 2
    return getRandomSign() + randomPosition.toString()
  }

  const getRandomTranslationX = () => {
    const randomPosition = Math.floor(Math.random() * (elementRef.current?.parentElement.offsetWidth - 100)) / 2
    return getRandomSign() + randomPosition.toString()
  }

  useEffect(() => {
    const startPositionX = getRandomTranslationX()
    const startPositionY = getRandomTranslationY()

    const animalAnimation = [
      { transform: `translate(${startPositionX}px, ${startPositionY}px)` },
      { transform: `translate(${getRandomTranslationX()}px, ${getRandomTranslationY()}px)` },
      { transform: `translate(${getRandomTranslationX()}px, ${getRandomTranslationY()}px)` },
      { transform: `translate(${startPositionX}px, ${startPositionY}px)` }
    ]
    if (elementRef.current) {
      elementRef.current.animate(animalAnimation, { duration: elementRef.current.parentElement.offsetWidth * 10, iterations: Infinity })
    }
  }, [])

  return (
    <>
    {
      !returnedAnimals.includes(id)
        ? <img src={img} id={id} className={draggableAnimal.animals} onDragStart={handleDrag} ref={elementRef}/>
        : null
    }
    </>
  )
}

export default DraggableAnimal
