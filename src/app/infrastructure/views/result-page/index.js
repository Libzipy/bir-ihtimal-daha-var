import React from 'react'
import { Navbar, Footer } from '../../components'
import { CheckoutSteps } from '../../components'

const ResultPage = () => {
  return (
    <>
      <Navbar />
      <CheckoutSteps step1 step2 step3 step4 />
      <div>ResultPage</div>
      <Footer />
    </>
  )
}

export default ResultPage
