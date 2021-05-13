import React from 'react'
import { CheckoutSteps } from '../../components'
import AppContainer from './app-container'

const App = () => {
  return (
    <>
      <div className="center">
        <CheckoutSteps step1 />
      </div>
      <AppContainer />
    </>
  )
}

export default App
