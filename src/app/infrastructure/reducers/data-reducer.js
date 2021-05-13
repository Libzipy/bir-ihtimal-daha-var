import { ADD_DATA, REMOVE_DATA } from '../actions/types/data-constant'

export const dataReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_DATA:
      return { data: action.payload }
    case REMOVE_DATA:
      return { data: action.payload }
    default:
      return state
  }
}
