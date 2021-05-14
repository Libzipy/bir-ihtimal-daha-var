import { ADD_OPTION, REMOVE_OPTION } from '../types/option-constant'

export const addOption = (option) => async (dispatch) => {
  dispatch({
    type: ADD_OPTION,
    payload: option
  })

  localStorage.setItem('option', JSON.stringify(option))
}

export const removeData = () => async (dispatch) => {
  dispatch({
    type: REMOVE_OPTION
  })

  localStorage.removeItem('option')
}
