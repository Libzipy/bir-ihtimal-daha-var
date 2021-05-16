import React from 'react'
import { Link } from 'react-router-dom'
import { Mockup } from '../../../assets'

const LandingTopContent = () => {
  return (
    <div className="landing-container-top">
      <div className="landing-content-left">
        <div className="landing-content-left-center">
          <h1>Bir İhtimal Daha Var</h1>
          <p>
            Veri setini gir ve yapmak istediklerini chartlar üzerinden çözümle ve görselleştir.{' '}
          </p>
          <button className="btn-lg landing-button">
            <Link to="/app">
              Başla
              <i
                className="fas fa-play"
                style={{ textAlign: 'center', marginLeft: '0.5rem', fontSize: '1rem' }}
              ></i>
            </Link>
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
