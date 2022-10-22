import InformationModal from './informationModal'
import { Link } from 'wouter'
import nextLevelModal from './nextLevelModal.module.css'

const NextLevelModal = ({ timeScore, score, level = '' }) => {
  return (
    <InformationModal automaticallyCloses={false} isOpen={true}>
      <div className={nextLevelModal.container}>
        <header>¡Ganaste!</header>
        <p>Tu puntuación es de {score}</p>
        <p>Bonus por tiempo {timeScore}</p>
        <b>Puntuación total {score + timeScore}</b>
        <Link href={`/game/${level}`}>Siguiente nivel</Link>
      </div>
    </InformationModal>
  )
}

export default NextLevelModal
