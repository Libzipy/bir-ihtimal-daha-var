import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Navbar, Footer } from '../../components'
import { CheckoutSteps } from '../../components'
import Timelines from './timelines'
import data from './data'

const ProcessPage = () => {
  const option = useSelector((state) => state.viewOption.option.option)
  const selected = data.filter((s) => s.id === option)[0].title

  return (
    <>
      <Navbar />
      <div className="center">
        <CheckoutSteps step1 step2 step3 />
      </div>
      <div className="selected">
        <div className="selected-data">
          <div className="selected-data-title">Seçilen Fonksiyon</div>
          {selected}
        </div>
      </div>
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
