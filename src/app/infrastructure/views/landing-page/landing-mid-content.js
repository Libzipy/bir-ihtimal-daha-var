import React from 'react'
import { LandingOne, LandingTwo } from '../../../assets'

const LandingMidContent = () => {
  return (
    <div className="landing-container-mid">
      <div className="landing-wrapper">
        <div className="landing-content-one">
          <img className="landing-content-one-img" src={LandingOne} />
          <div className="landing-content-one-right">
            <div className="landing-content-one-right-empty"></div>
            <div className="landing-content-one-right-content">
              Butonuna tiklayarak rastgele veri seti olusturabilirsiniz.
            </div>
          </div>
        </div>
        <div className="landing-content-two">
          <div className="landing-content-two-left">
            <div className="landing-content-two-left-content">
              Butonuna tiklayarak rastgele veri seti olusturabilirsiniz.
            </div>
            <div className="landing-content-two-left-empty"></div>
          </div>
          <img className="landing-content-two-img" src={LandingTwo} />
        </div>
      </div>
    </div>
  )
}

export default LandingMidContent
