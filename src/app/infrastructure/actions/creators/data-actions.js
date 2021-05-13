import { ADD_DATA, REMOVE_DATA } from '../types/data-constant'

export const addData = (data) => (dispatch, _getState) => {
  dispatch({
    type: ADD_DATA,
    payload: data
  })

  localStorage.setItem('data', JSON.stringify(data))
}

export const removeData = (data) => (dispatch, _getState) => {
  dispatch({
    type: REMOVE_DATA
  })

  localStorage.removeItem('data')
}
