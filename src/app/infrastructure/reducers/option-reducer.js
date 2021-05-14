import { ADD_OPTION, REMOVE_OPTION } from '../actions/types/option-constant'

export const optionReducer = (state = { viewData: { option: [] } }, action) => {
  switch (action.type) {
    case ADD_OPTION:
      // let x = { ...state, option: action.payload }
      console.log('option  reducer', action.payload)
      return { ...state, option: action.payload }
    case REMOVE_OPTION:
      return { ...state, option: action.payload }
    default:
      return state
  }
}
