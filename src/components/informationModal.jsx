import { useState } from 'react'
import informationModal from './informationModal.module.css'

const InformationModal = ({ children }) => {
  const [openModal, setOpenModal] = useState(true)

  if (openModal) {
    setTimeout(() => {
      setOpenModal(prevState => !prevState)
    }, 6100)
  }
  return (
    <>
      {
        openModal
          ? <div className={informationModal.container}>
              <p className={informationModal['modal-info']}>{ children }</p>
            </div>
          : null
      }
    </>
  )
}

export default InformationModal
