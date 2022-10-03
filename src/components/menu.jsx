import { useState, useEffect } from 'react'
import { Link } from 'wouter'
import InformationModal from './informationModal'
import menu from './menu.module.css'

const Menu = ({ isOpen, setOpenMenu }) => {
  const [warning, setWarning] = useState([false, '/'])

  const handleClick = (url) => {
    setWarning((prevWarning) => [!prevWarning[0], url])
    console.log(warning[1])
  }
  useEffect(() => {
    console.log(warning)
  }, [warning])
  return (
    <InformationModal automaticallyCloses={false} isOpen={isOpen}>
      <div className={menu['menu-container']}>
        <header>Menú</header>
        <button onClick={handleClick}>Volver Atrás</button>
        <button onClick={() => handleClick('/')}>Volver al principio</button>
        <button onClick={() => setOpenMenu(false)}>Cerrar Menú</button>
      </div>
      {
        <InformationModal automaticallyCloses={false} isOpen={warning[0]}>
          <div className={menu['warning-container']}>
            <header>¿Estas seguro?</header>
            <p>Puedes perder tu progreso si lo haces</p>
            <div>
              <button onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg></button>
              <Link href={`${warning[1]}`}><a><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></a></Link>
            </div>
          </div>
        </InformationModal>
      }
    </InformationModal>
  )
}

export default Menu
