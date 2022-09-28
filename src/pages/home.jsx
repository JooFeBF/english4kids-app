import ContentContainer from '../components/contentContainer'
import home from './home.module.css'
import kid from '../assets/images/personaje.svg'
import { Link } from 'wouter'

const Home = () => {
  return (
    <ContentContainer>
      <div className={home.container}>
        <div className={home['info-container']}>
          <h1 className={home.title}>English 4 Kids</h1>
          <h2 className={home.subtitle}>¡Aprendamos divirtiéndonos juntos!</h2>
          <Link href="/game/memory" className={home.link}>Jugar</Link>
        </div>
        <div className={home['img-container']}>
          <img src={kid} alt='kid'/>
        </div>
      </div>
    </ContentContainer>
  )
}

export default Home
