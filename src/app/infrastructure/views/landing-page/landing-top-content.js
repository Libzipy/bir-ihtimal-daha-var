import React from 'react'
import { Link } from 'react-router-dom'
import { Mockup } from '../../../assets'

const LandingTopContent = () => {
  return (
    <div className="landing-container-top">
      <div className="landing-content-left">
        <div className="landing-content-left-center">
          <h1>Bir İhtimal Daha Var</h1>
          <p>Veri setini gir ve yapmak istediklerini chartlar üzerinden görselleştir. </p>
          <button className="btn-lg landing-button">
            <Link to="/app">Basla</Link>
          </button>
        </div>
      </div>
      <div className="landing-content-right">
        <img className="landing-content-right-img" src={Mockup} />
      </div>
    </div>
  )
}

export default LandingTopContent
