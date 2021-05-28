import { ADD_PARAM, REMOVE_PARAM } from '../types/param-constant'

export const addParam = (param) => async (dispatch) => {
  dispatch({
    type: ADD_PARAM,
    payload: param
  })

  localStorage.setItem('param', JSON.stringify(param))
}

export const removeParam = () => async (dispatch) => {
  dispatch({
    type: REMOVE_PARAM
  })

  localStorage.removeItem('param')
}
