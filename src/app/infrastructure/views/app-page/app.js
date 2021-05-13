import React from 'react'
import { CheckoutSteps } from '../../components'
import AppContainer from './app-container'

/* eslint-disable react/prop-types */
const App = ({ history }) => {
  return (
    <>
      <div className="center">
        <CheckoutSteps step1 />
      </div>
      <AppContainer history={history} />
    </>
  )
}

export default App
