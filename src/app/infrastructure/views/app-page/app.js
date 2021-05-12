import React from 'react'
import { Link } from 'react-router-dom'
import { CheckoutSteps } from '../../components'

const App = () => {
  return (
    <>
      <div className="center">
        <CheckoutSteps step1 />
      </div>
      <div className="app-container">
        <button className="btn-lg ">
          <Link to="/option">Devam Et</Link>
        </button>
      </div>
    </>
  )
}

export default App
