import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Footer } from '../../components'
import { CheckoutSteps } from '../../components'

const OptionPage = () => {
  return (
    <>
      <Navbar />
      <CheckoutSteps step1 step2 />
      <div>
        <button className="btn-lg ">
          <Link to="/process">Devam Et</Link>
        </button>
      </div>
      <Footer />
    </>
  )
}

export default OptionPage
