import { reducer } from './reducer-combine'
import { initialState } from '../infrastructure/initializer'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(reducer, initialState, composeWithDevTools())

export default store
