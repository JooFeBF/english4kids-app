import car from './car.module.css'

const Car = ({ handleColorPaint }) => {
  return (
    <div className={car['car-zone']}>
      <div>
        <div
          className={car['car-window-1']}
          onClick={handleColorPaint}
          data-color={'rgb(13, 198, 252)'}
        ></div>
        <div
          className={car['car-window-2']}
          onClick={handleColorPaint}
          data-color={'rgb(13, 198, 252)'}
        ></div>
        <div
          className={car['car-body-1']}
          onClick={handleColorPaint}
          data-color={'rgb(229, 1, 3)'}
        ></div>
        <div
          className={car['car-body-2']}
          onClick={handleColorPaint}
          data-color={'rgb(229, 1, 3)'}
        ></div>
        <div
          className={car['car-body-3']}
          onClick={handleColorPaint}
          data-color={'rgb(229, 1, 3)'}
        ></div>
        <div
          className={car['car-body-4']}
          onClick={handleColorPaint}
          data-color={'rgb(229, 1, 3)'}
        ></div>
        <div className={car['car-wheel-1']}>
          <div>
            <div></div>
          </div>
        </div>
        <div className={car['car-wheel-2']}>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Car
