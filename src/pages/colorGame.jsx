import { useState, useEffect } from 'react'
import GameContainer from '../components/gameContainer'
import GameUI from '../components/gameUI'
import Menu from '../components/menu'
import GameNavBar from '../components/gameNavBar'
import colorGame from './colorGame.module.css'
import blue from '../assets/images/cardGame/blue.webp'
import red from '../assets/images/cardGame/red.webp'
import green from '../assets/images/cardGame/green.webp'
import NextLevelModal from '../components/nextLevelModal'
import useCarReducer from '../hooks/colorGame/useCarReducer'
import Car from '../components/colorGame/car'
import House from '../components/colorGame/house'
import useHouseReducer from '../hooks/colorGame/useHouseReducer'
import Gift from '../components/colorGame/gift'
import useGiftReducer from '../hooks/colorGame/useGiftReducer'
import questionMark from '../assets/images/colorGame/questionMark.webp'
import Guide from '../components/colorGame/guide'
import car from '../assets/images/colorGame/car.webp'
import gift from '../assets/images/colorGame/gift.webp'
import house from '../assets/images/colorGame/house.webp'

let timeScore = 1000
let pause = false

const scoreByTime = setInterval(() => {
  if (timeScore > 0 && !pause) timeScore -= 100
}, 25000)

const ColorGame = () => {
  const [score, setScore] = useState(0)
  const [openMenu, setOpenMenu] = useState(false)
  const [color, setColor] = useState('')
  const [openGuide, setOpenGuide] = useState(false)
  const { isCarColorCorrect, carDispatch } = useCarReducer()
  const { isHouseColorCorrect, houseDispatch } = useHouseReducer()
  const { isGiftColorCorrect, giftDispatch } = useGiftReducer()
  const handleColorChange = (color) => {
    if (color) setColor(color)
  }

  const handleColorPaint = (e) => {
    if (color && color !== e.target.style.backgroundColor) {
      e.target.style.backgroundColor = color
      const classNameString = e.target.className.split('')
      classNameString.splice(0, 1 + classNameString.findIndex(letter => letter === '-'))
      classNameString.splice(classNameString.findIndex(letter => letter === '_'), classNameString.length)
      const coloredPart = classNameString.join('')

      if (e.target.dataset.color === color) {
        if (score < 600) carDispatch({ type: coloredPart, payload: true })
        if (score >= 600 && score < 2800) houseDispatch({ type: coloredPart, payload: true })
        if (score >= 2800 && score < 4100) giftDispatch({ type: coloredPart, payload: true })
      } else {
        if (score < 600) carDispatch({ type: coloredPart, payload: false })
        if (score >= 600 && score < 2800) houseDispatch({ type: coloredPart, payload: false })
        if (score >= 2800 && score < 4100) giftDispatch({ type: coloredPart, payload: false })
      }
    }
  }

  useEffect(() => {
    if (score < 600) {
      const wellColoredParts = Object.keys(isCarColorCorrect).filter(key => isCarColorCorrect[key])
      setScore(wellColoredParts.length * 100)
    }
    if (score >= 600 && score < 2800) {
      const wellColoredParts = Object.keys(isHouseColorCorrect).filter(key => isHouseColorCorrect[key])
      setScore(wellColoredParts.length * 100 + 600)
    }
    if (score >= 2800 && score < 4100) {
      const wellColoredParts = Object.keys(isGiftColorCorrect).filter(key => isGiftColorCorrect[key])
      setScore(wellColoredParts.length * 100 + 2800)
    }
    if (score === 4100) clearInterval(scoreByTime)
  }, [isCarColorCorrect, isHouseColorCorrect, isGiftColorCorrect])

  useEffect(() => {
    openMenu ? pause = true : pause = false
  }, [openMenu])

  const returnThingsToPaint = (score) => {
    if (score < 600) return <Car handleColorPaint={handleColorPaint}/>
    if (score >= 600 && score < 2800) return <House handleColorPaint={handleColorPaint}/>
    if (score >= 2800 && score <= 4200) return <Gift handleColorPaint={handleColorPaint}/>
  }
  const returnObjectAndImage = () => {
    if (score < 600) return { object: 'Car', image: car }
    if (score >= 600 && score < 2800) return { object: 'House', image: house }
    if (score >= 2800 && score <= 4200) return { object: 'Gift', image: gift }
  }

  return (
    <GameContainer title={'¡Colorea!'} subtitle={'Pinta los siguientes objectos con la ayuda de la guía que encuentras abajo a la derecha'}>
      {
        openMenu ? <Menu isOpen={openMenu} setOpenMenu={setOpenMenu}/> : null
      }
      {
        openGuide ? <Guide isOpen={openGuide} setOpenGuide={setOpenGuide} object={returnObjectAndImage().object} imgObject={returnObjectAndImage().image}/> : null
      }
      {
        score === 4100 ? <NextLevelModal score={score} timeScore={timeScore}/> : null
      }
      <GameUI>
        <GameNavBar score={score} setOpenMenu={setOpenMenu}/>
        <div className={colorGame['play-zone']}>
          {
            returnThingsToPaint(score)
          }
          <div className={colorGame['color-options-container']}>
            <div className={`${colorGame['color-option-red']} color-option`} onClick={() => handleColorChange('rgb(229, 1, 3)')} style={color === 'rgb(229, 1, 3)' ? { transform: 'translateY(-10%)' } : null }>
              <img src={red} alt="red-color" />
            </div>
            <div className={`${colorGame['color-option-green']} color-option`} onClick={() => handleColorChange('rgb(81, 222, 83)')} style={color === 'rgb(81, 222, 83)' ? { transform: 'translateY(-10%)' } : null }>
              <img src={green} alt="green-color" />
            </div>
            <div className={`${colorGame['color-option-blue']} color-option`} onClick={() => handleColorChange('rgb(13, 198, 252)')} style={color === 'rgb(13, 198, 252)' ? { transform: 'translateY(-10%)' } : null }>
              <img src={blue} alt="blue-color" />
            </div>
            <div className={'color-option'} onClick={() => setOpenGuide(prevState => !prevState)}>
              <img src={questionMark} alt="questionMark"/>
            </div>
          </div>
        </div>
      </GameUI>
    </GameContainer>
  )
}

export default ColorGame
