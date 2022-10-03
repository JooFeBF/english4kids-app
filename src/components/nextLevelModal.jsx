import InformationModal from './informationModal'
import { Link } from 'wouter'
import nextLevelModal from './nextLevelModal.module.css'

const NextLevelModal = ({ totalScore }) => {
  return (
    <InformationModal automaticallyCloses={false} isOpen={true}>
      <div className={nextLevelModal.container}>
        <header>¡Ganaste!</header>
        <p>Tu puntuación es de {totalScore}</p>
        <Link href='/games/pepe'>Siguiente nivel</Link>
      </div>
    </InformationModal>
  )
}

export default NextLevelModal
