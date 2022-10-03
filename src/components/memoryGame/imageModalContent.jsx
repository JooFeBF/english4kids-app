import imageModalContent from './imageModalContent.module.css'

const ImageModalContent = ({ englishText, img, spanishText }) => {
  return (
    <div className={imageModalContent.container}>
      <p>{englishText}</p>
      <img src={img} alt={englishText} />
      <p>Significa {spanishText}</p>
    </div>
  )
}

export default ImageModalContent
