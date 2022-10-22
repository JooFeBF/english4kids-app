import { useReducer } from 'react'

const useGiftReducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'ribbon-1':
        return {
          ...state,
          'ribbon-1': action.payload
        }
      case 'ribbon-2':
        return {
          ...state,
          'ribbon-2': action.payload
        }
      case 'ribbon-3':
        return {
          ...state,
          'ribbon-3': action.payload
        }
      case 'ribbon-4':
        return {
          ...state,
          'ribbon-4': action.payload
        }
      case 'ribbon-5':
        return {
          ...state,
          'ribbon-5': action.payload
        }
      case 'ribbon-6':
        return {
          ...state,
          'ribbon-6': action.payload
        }
      case 'ribbon-7':
        return {
          ...state,
          'ribbon-7': action.payload
        }
      case 'ribbon-8':
        return {
          ...state,
          'ribbon-8': action.payload
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
      default:
        return state
    }
  }

  const [isGiftColorCorrect, giftDispatch] = useReducer(reducer, {
    'ribbon-1': false,
    'ribbon-2': false,
    'ribbon-3': false,
    'ribbon-4': false,
    'ribbon-5': false,
    'ribbon-6': false,
    'ribbon-7': false,
    'ribbon-8': false,
    'body-1': false,
    'body-2': false,
    'body-3': false,
    'body-4': false,
    'body-5': false,
    'body-6': false
  })

  return { isGiftColorCorrect, giftDispatch }
}

export default useGiftReducer
