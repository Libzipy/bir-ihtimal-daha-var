import { ADD_PARAM, REMOVE_PARAM } from '../actions/types/param-constant'

export const paramReducer = (state = { viewParam: { param: [] } }, action) => {
  switch (action.type) {
    case ADD_PARAM:
      return { ...state, param: action.payload }
    case REMOVE_PARAM:
      return { ...state, param: action.payload }
    default:
      return state
  }
}
