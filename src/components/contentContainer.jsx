import contentContainer from './contentContainer.module.css'

const ContentContainer = ({ children }) => {
  return (
    <div className={contentContainer.container}>
      <div className={contentContainer['content-container']}>{children}</div>
    </div>
  )
}

export default ContentContainer
