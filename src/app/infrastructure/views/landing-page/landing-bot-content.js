import React from 'react'
import { Link } from 'react-router-dom'

const LandingBotContent = () => {
  return (
    <div className="landing-container-bot">
      <div className="landing-bot-wrapper">
        <h1>
          <span className="porti">İhtimaller</span> Üzerine
        </h1>
        <h3>Bütün ihtimaller arasında bir ihtimal daha var 👻.</h3>
        <button className="btn-lg landing-button">
          <Link to="/app">
            Uygula
            <i
              className="fas fa-rocket"
              style={{ textAlign: 'center', marginLeft: '0.5rem', fontSize: '1rem' }}
            ></i>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default LandingBotContent
