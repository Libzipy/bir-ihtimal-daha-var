import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Footer } from '../../components'
import { CheckoutSteps } from '../../components'
import Timeline from './timeline'

const ProcessPage = () => {
  return (
    <>
      <Navbar />
      <CheckoutSteps step1 step2 step3 />
      <div>
        <Timeline />
        <button className="btn-lg ">
          <Link to="/result">Devam Et</Link>
        </button>
      </div>
      <Footer />
    </>
  )
}

export default ProcessPage
