import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Footer } from '../../components'
import { CheckoutSteps } from '../../components'
import Timelines from './timelines'
// import { useSelector } from 'react-redux'

const ProcessPage = () => {
  // const option = useSelector((state) => state.viewOption)
  return (
    <>
      <Navbar />
      <div className="center">
        <CheckoutSteps step1 step2 step3 />
      </div>
      <p></p>
      <div className="process-container">
        <Timelines />
        <button className="btn-lg submit-option">
          <Link to="/result">Devam Et</Link>
        </button>
      </div>
      <Footer />
    </>
  )
}

export default ProcessPage
