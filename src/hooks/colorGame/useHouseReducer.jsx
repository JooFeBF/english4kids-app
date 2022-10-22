import { useReducer } from 'react'

const useHouseReducer = () => {
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
      case 'body-5':
        return {
          ...state,
          'body-5': action.payload
        }
      case 'body-6':
        return {
          ...state,
          'body-6': action.payload
        }
      case 'body-7':
        return {
          ...state,
          'body-7': action.payload
        }
      case 'body-8':
        return {
          ...state,
          'body-8': action.payload
        }
      case 'body-9':
        return {
          ...state,
          'body-9': action.payload
        }
      case 'body-10':
        return {
          ...state,
          'body-10': action.payload
        }
      case 'body-11':
        return {
          ...state,
          'body-11': action.payload
        }
      case 'body-12':
        return {
          ...state,
          'body-12': action.payload
        }
      case 'body-13':
        return {
          ...state,
          'body-13': action.payload
        }
      case 'body-14':
        return {
          ...state,
          'body-14': action.payload
        }
      case 'body-15':
        return {
          ...state,
          'body-15': action.payload
        }
      case 'body-16':
        return {
          ...state,
          'body-16': action.payload
        }
      case 'body-17':
        return {
          ...state,
          'body-17': action.payload
        }
      case 'roof-1':
        return {
          ...state,
          'roof-1': action.payload
        }
      case 'door-1':
        return {
          ...state,
          'door-1': action.payload
        }
      case 'door-2':
        return {
          ...state,
          'door-2': action.payload
        }
      default:
        return state
    }
  }

  const [isHouseColorCorrect, houseDispatch] = useReducer(reducer, {
    'window-1': false,
    'window-2': false,
    'body-1': false,
    'body-2': false,
    'body-3': false,
    'body-4': false,
    'body-5': false,
    'body-6': false,
    'body-7': false,
    'body-8': false,
    'body-9': false,
    'body-10': false,
    'body-11': false,
    'body-12': false,
    'body-13': false,
    'body-14': false,
    'body-15': false,
    'body-16': false,
    'body-17': false,
    'roof-1': false,
    'door-1': false,
    'door-2': false
  })

  return { isHouseColorCorrect, houseDispatch }
}

export default useHouseReducer
