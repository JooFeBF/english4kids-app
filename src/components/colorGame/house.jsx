import house from './house.module.css'

const House = ({ handleColorPaint }) => {
  return (
    <div className={house['house-zone']}>
      <div>
        <div className={house['house-roof-1-container']}>
          <div
            className={house['house-roof-1']}
            onClick={handleColorPaint}
            data-color={'rgb(81, 222, 83)'}
          ></div>
        </div>
        <div
          className={house['house-window-1']}
          onClick={handleColorPaint}
          data-color={'rgb(13, 198, 252)'}
        ></div>
        <div
          className={house['house-window-2']}
          onClick={handleColorPaint}
          data-color={'rgb(13, 198, 252)'}
        ></div>
        <div
          className={house['house-body-1']}
          onClick={handleColorPaint}
          data-color={'rgb(229, 1, 3)'}
        ></div>
        <div
          className={house['house-body-2']}
          onClick={handleColorPaint}
          data-color={'rgb(229, 1, 3)'}
        ></div>
        <div
          className={house['house-body-3']}
          onClick={handleColorPaint}
          data-color={'rgb(229, 1, 3)'}
        ></div>
        <div
          className={house['house-body-4']}
          onClick={handleColorPaint}
          data-color={'rgb(229, 1, 3)'}
        ></div>
        <div
          className={house['house-body-5']}
          onClick={handleColorPaint}
          data-color={'rgb(229, 1, 3)'}
        ></div>
        <div
          className={house['house-body-6']}
          onClick={handleColorPaint}
          data-color={'rgb(229, 1, 3)'}
        ></div>
        <div
          className={house['house-body-7']}
          onClick={handleColorPaint}
          data-color={'rgb(229, 1, 3)'}
        ></div>
        <div
          className={house['house-body-8']}
          onClick={handleColorPaint}
          data-color={'rgb(229, 1, 3)'}
        ></div>
        <div
          className={house['house-body-9']}
          onClick={handleColorPaint}
          data-color={'rgb(229, 1, 3)'}
        ></div>
        <div
          className={house['house-body-10']}
          onClick={handleColorPaint}
          data-color={'rgb(229, 1, 3)'}
        ></div>
        <div
          className={house['house-body-11']}
          onClick={handleColorPaint}
          data-color={'rgb(229, 1, 3)'}
        ></div>
        <div
          className={house['house-body-12']}
          onClick={handleColorPaint}
          data-color={'rgb(229, 1, 3)'}
        ></div>
        <div
          className={house['house-body-13']}
          onClick={handleColorPaint}
          data-color={'rgb(229, 1, 3)'}
        ></div>
        <div
          className={house['house-body-14']}
          onClick={handleColorPaint}
          data-color={'rgb(229, 1, 3)'}
        ></div>
        <div
          className={house['house-body-15']}
          onClick={handleColorPaint}
          data-color={'rgb(229, 1, 3)'}
        ></div>
        <div
          className={house['house-body-16']}
          onClick={handleColorPaint}
          data-color={'rgb(229, 1, 3)'}
        ></div>
        <div
          className={house['house-body-17']}
          onClick={handleColorPaint}
          data-color={'rgb(229, 1, 3)'}
        ></div>
        <div
          className={house['house-door-1']}
          onClick={handleColorPaint}
          data-color={'rgb(81, 222, 83)'}
        ></div>
        <div
          className={house['house-door-2']}
          onClick={handleColorPaint}
          data-color={'rgb(81, 222, 83)'}
        ></div>
      </div>
    </div>
  )
}

export default House
