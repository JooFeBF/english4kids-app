import ContentContainer from '../components/contentContainer'
import InformationModal from '../components/informationModal'
import gameContainer from './gameContainer.module.css'

const GameContainer = ({ children, title, subtitle }) => {
  return (
    <ContentContainer>
      <InformationModal >
        <header>{ title }</header>
        <p className={gameContainer.subtitle}>{subtitle}</p>
      </InformationModal>
      { children }
    </ContentContainer>
  )
}

export default GameContainer
