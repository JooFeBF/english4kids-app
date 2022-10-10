import { useState, useEffect } from 'react'
import GameContainer from '../components/gameContainer'
import Menu from '../components/menu'
import memoryGame from './memoryGame.module.css'
import bars from '../assets/images/bars-solid.svg'
import lion from '../assets/images/zooGame/lion.png'
import elephant from '../assets/images/zooGame/elephant.png'
import crocodile from '../assets/images/zooGame/crocodile.png'
import monkey from '../assets/images/zooGame/monkey.png'
import zooGame from './zooGame.module.css'
import GameUI from '../components/gameUI'
import DraggableAnimal from '../components/zooGame/draggableAnimal'
import InformationModal from '../components/informationModal'
import NextLevelModal from '../components/nextLevelModal'
import { polyfill } from 'mobile-drag-drop'

import { scrollBehaviourDragImageTranslateOverride } from 'mobile-drag-drop/scroll-behaviour'

polyfill({
  dragImageTranslateOverride: scrollBehaviourDragImageTranslateOverride
})
const animalsFirstRound = [
  {
    id: 'lion-1',
    img: lion
  },
  {
    id: 'lion-2',
    img: lion
  },
  {
    id: 'lion-3',
    img: lion
  },
  {
    id: 'elephant-1',
    img: elephant
  },
  {
    id: 'elephant-2',
    img: elephant
  },
  {
    id: 'elephant-3',
    img: elephant
  }
]
const animalsSecondRound = [
  {
    id: 'monkey-1',
    img: monkey
  },
  {
    id: 'monkey-2',
    img: monkey
  },
  {
    id: 'monkey-3',
    img: monkey
  },
  {
    id: 'crocodile-1',
    img: crocodile
  },
  {
    id: 'crocodile-2',
    img: crocodile
  },
  {
    id: 'crocodile-3',
    img: crocodile
  }
]

let timeScore = 1000
let pause = false

const scoreByTime = setInterval(() => {
  if (timeScore > 0 && !pause) timeScore -= 100
}, 25000)

const handleDragOver = (e) => {
  e.preventDefault()
}
const handleDragLeave = (e) => {
  e.target.parentElement.classList.remove('drag-enter')
}

const handleDragEnter = (e) => {
  e.preventDefault()
  e.target.parentElement.classList.add('drag-enter')
}
const ZooGame = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [returnedAnimals, setReturnedAnimals] = useState([])
  const [wrongAnimalAdvice, setWrongAnimalAdvice] = useState('')
  const [score, setScore] = useState(0)
  const [round, setRound] = useState(1)

  const handleDrop = (e) => {
    e.preventDefault()
    const data = e.dataTransfer.getData('text/plain')
    if (data.split('', data.length - 2).join('') === e.target.dataset.animal) {
      setReturnedAnimals(prevReturnedAnimals => [...prevReturnedAnimals, data])
      setScore(prevScore => prevScore + 100)
    } else {
      setWrongAnimalAdvice(e.target.dataset.advice_animal)
      setTimeout(() => setWrongAnimalAdvice(''), 6000)
    }
    handleDragLeave(e)
  }

  useEffect(() => {
    if (round === 2 && returnedAnimals.length === animalsFirstRound.length) clearInterval(scoreByTime)
    if (returnedAnimals.length === animalsFirstRound.length && round === 1) {
      setReturnedAnimals([])
      setRound(2)
    }
  }, [returnedAnimals])

  useEffect(() => {
    openMenu
      ? pause = true
      : pause = false
  }, [openMenu])

  return (
    <GameContainer title={'Devuelve a los animales a su zona'} subtitle={'Arrastra a los animales hacia su respectivo lugar'}>
      {
        openMenu ? <Menu isOpen={openMenu} setOpenMenu={setOpenMenu}/> : null
      }
      {
        wrongAnimalAdvice ? <InformationModal>Ahi van los {wrongAnimalAdvice}</InformationModal> : null
      }
      {
        returnedAnimals.length === animalsFirstRound.length && round === 2 ? <NextLevelModal score={score} timeScore={timeScore} level={'color'} /> : null
      }
      <GameUI>
        <div className={memoryGame.header}>
            <p>Puntos {score}</p>
            <button onClick={() => setOpenMenu(true)}><img src={bars} alt="menu" /></button>
        </div>
        <div className={zooGame['game-zone']}>
          {
            round === 1
              ? <div className={zooGame['elephants-place']} >
              <div onDrop={handleDrop} onDragOver={handleDragOver} onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} data-animal={'elephant'} data-advice_animal={'elefantes'}></div>
            <p>Elephants</p>
          </div>
              : <div className={zooGame['monkeys-place']} >
            <div onDrop={handleDrop} onDragOver={handleDragOver} onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} data-animal={'monkey'} data-advice_animal={'monos'}></div>
          <p>Monkeys</p>
        </div>
          }

          <div className={zooGame['animals-container']}>
            {
              round === 1
                ? animalsFirstRound.map(animal => <DraggableAnimal id={animal.id} img={animal.img} key={animal.id} alt={animal.id} returnedAnimals={returnedAnimals}/>)
                : animalsSecondRound.map(animal => <DraggableAnimal id={animal.id} img={animal.img} key={animal.id} alt={animal.id} returnedAnimals={returnedAnimals}/>)
            }
          </div>
          {
            round === 1
              ? <div className={zooGame['lions-place']} >
            <div onDrop={handleDrop} onDragOver={handleDragOver} onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} data-animal={'lion'} data-advice_animal={'leones'}></div>
            <p>Lions</p>
          </div>
              : <div className={zooGame['crocodiles-place']} >
            <div onDrop={handleDrop} onDragOver={handleDragOver} onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} data-animal={'crocodile'} data-advice_animal={'cocodrilos'}></div>
          <p>Crocodiles</p>
        </div>
          }

        </div>
      </GameUI>
    </GameContainer>
  )
}

export default ZooGame
