import InformationModal from '../informationModal'
import ImageModalContent from './imageModalContent'

const ImageInfoModals = ({ img, word }) => {
  const imageDictionary = {
    red: <ImageModalContent englishText='Red' spanishText='rojo'img={img}/>,
    green: <ImageModalContent englishText='Green' spanishText='verde'img={img}/>,
    blue: <ImageModalContent englishText='Blue' spanishText='azul'img={img}/>,
    dog: <ImageModalContent englishText='Dog' spanishText='perro'img={img}/>,
    cat: <ImageModalContent englishText='Cat' spanishText='gato'img={img}/>,
    elephant: <ImageModalContent englishText='Elephant' spanishText='elefante'img={img}/>
  }

  return (
    <InformationModal>
      {
        imageDictionary[word]
      }
    </InformationModal>
  )
}

export default ImageInfoModals
