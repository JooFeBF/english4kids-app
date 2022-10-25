import ContentContainer from '../components/contentContainer'
import video from './video.module.css'
import { Link } from 'wouter'
import GameUI from '../components/gameUI'
import GameNavBar from '../components/gameNavBar'
import { useState } from 'react'
import Menu from '../components/menu'
import arrowLeft from '../assets/images/arrow-left-solid.svg'
import arrowRight from '../assets/images/arrow-right-solid.svg'

const videos = {
  zoo: 'fEKgzeIqp-c',
  color: 'WfL2Xc031tk',
  memory: 'JGThxgUIjY8'
}

const Video = ({ link }) => {
  console.log({ link }, videos.link)

  const returnPreviousGame = () => {
    if (link === 'memory') return '/'
    if (link === 'zoo') return '/game/memory'
    if (link === 'color') return '/game/zoo'
  }

  const [openMenu, setOpenMenu] = useState(false)
  return (
    <ContentContainer>
      {
        openMenu ? <Menu isOpen={openMenu} setOpenMenu={setOpenMenu}/> : null
      }
      <GameUI>
        <GameNavBar setOpenMenu={setOpenMenu} />
        <div className={video['video-container']}>
          <iframe src={`https://www.youtube.com/embed/${videos[link]}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <div>
            <Link href={returnPreviousGame()}><a><img src={arrowLeft} alt="arrow-left" /></a></Link><Link className={video.link} href='/'>Mas videos</Link><Link href={`/game/${link}`}><a><img src={arrowRight} alt="arrowRight" /></a></Link>
          </div>
        </div>
      </GameUI>
    </ContentContainer>
  )
}

export default Video
