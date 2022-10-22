import gift from './gift.module.css'

const Gift = ({ handleColorPaint }) => {
  return (
    <div className={gift['gift-zone']}>
      <div>
      <div
          className={gift['gift-ribbon-1']}
          onClick={handleColorPaint}
          data-color={'rgb(81, 222, 83)'}
        ></div>
        <div
          className={gift['gift-ribbon-2']}
          onClick={handleColorPaint}
          data-color={'rgb(81, 222, 83)'}
        ></div>
        <div
          className={gift['gift-ribbon-3']}
          onClick={handleColorPaint}
          data-color={'rgb(81, 222, 83)'}
        ></div>
        <div
          className={gift['gift-ribbon-4']}
          onClick={handleColorPaint}
          data-color={'rgb(81, 222, 83)'}
        ></div>
        <div
          className={gift['gift-ribbon-5']}
          onClick={handleColorPaint}
          data-color={'rgb(81, 222, 83)'}
        ></div>
        <div
          className={gift['gift-ribbon-6']}
          onClick={handleColorPaint}
          data-color={'rgb(81, 222, 83)'}
        ></div>
        <div
          className={gift['gift-ribbon-7']}
          onClick={handleColorPaint}
          data-color={'rgb(81, 222, 83)'}
        ></div>
        <div
          className={gift['gift-ribbon-8']}
          onClick={handleColorPaint}
          data-color={'rgb(81, 222, 83)'}
        ></div>
        <div
          className={gift['gift-body-1']}
          onClick={handleColorPaint}
          data-color={'rgb(229, 1, 3)'}
        ></div>
        <div
          className={gift['gift-body-2']}
          onClick={handleColorPaint}
          data-color={'rgb(229, 1, 3)'}
        ></div>
        <div
          className={gift['gift-body-3']}
          onClick={handleColorPaint}
          data-color={'rgb(229, 1, 3)'}
        ></div>
        <div
          className={gift['gift-body-4']}
          onClick={handleColorPaint}
          data-color={'rgb(229, 1, 3)'}
        ></div>
        <div
          className={gift['gift-body-5']}
          onClick={handleColorPaint}
          data-color={'rgb(229, 1, 3)'}
        ></div>
        <div
          className={gift['gift-body-6']}
          onClick={handleColorPaint}
          data-color={'rgb(229, 1, 3)'}
        ></div>
      </div>
    </div>
  )
}

export default Gift
