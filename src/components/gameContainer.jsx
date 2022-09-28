import ContentContainer from '../components/contentContainer'
import InformationModal from '../components/informationModal'

const GameContainer = ({ children, message }) => {
  return (
    <ContentContainer>
      <InformationModal>
        { message }
      </InformationModal>
      { children }
    </ContentContainer>
  )
}

export default GameContainer
