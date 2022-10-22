import { useReducer } from 'react'

const useCarReducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'window-1':
        return {
          ...state,
          'window-1': action.payload
        }
      case 'window-2':
        return {
          ...state,
          'window-2': action.payload
        }
      case 'body-1':
        return {
          ...state,
          'body-1': action.payload
        }
      case 'body-2':
        return {
          ...state,
          'body-2': action.payload
        }
      case 'body-3':
        return {
          ...state,
          'body-3': action.payload
        }
      case 'body-4':
        return {
          ...state,
          'body-4': action.payload
        }
      default:
        return state
    }
  }

  const [isCarColorCorrect, carDispatch] = useReducer(reducer, {
    'window-1': false,
    'window-2': false,
    'body-1': false,
    'body-2': false,
    'body-3': false,
    'body-4': false
  })

  return { isCarColorCorrect, carDispatch }
}

export default useCarReducer
