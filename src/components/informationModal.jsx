import { useState } from 'react'
import informationModal from './informationModal.module.css'

const InformationModal = ({ children, automaticallyCloses = true, isOpen }) => {
  const [openModal, setOpenModal] = useState(automaticallyCloses)

  if (openModal) {
    setTimeout(() => {
      setOpenModal(prevState => !prevState)
    }, 6100)
  }
  return (
    <>
      {
        openModal || isOpen
          ? <div className={`${informationModal.container} ${automaticallyCloses ? `${informationModal['start-and-end-animation']}` : `${informationModal['start-only-animation']}`}`}>
              <article className={informationModal['modal-info']}>{ children }</article>
            </div>
          : null
      }
    </>
  )
}

export default InformationModal
