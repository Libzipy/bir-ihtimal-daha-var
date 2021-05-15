import React, { useState } from 'react'
import { LandingOne, LandingTwo } from '../../../assets'
import { Alert } from '../../components'

const LandingMidContent = () => {
  const [data, setData] = useState('')

  const randomGenerator = () => {
    const random = Array(6)
      .fill()
      .map(() => Math.round(Math.random() * 99))
    setData(random.toString())
  }

  return (
    <div className="landing-container-mid">
      <div className="landing-wrapper">
        <div className="landing-content-one">
          <img className="landing-content-one-img" src={LandingOne} />
          <div className="landing-content-one-right">
            <div className="landing-content-one-right-empty"></div>
            <div className="landing-content-one-right-content">
              <div className="random-generator">
                <div className="random" onClick={randomGenerator}>
                  <i className="fas fa-random icon-color"></i>
                </div>
                <input
                  className="input"
                  type="text"
                  placeholder="Random veri seti üretebilirsin 💫"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                  required
                  title="Veri Girmeden Devam edilmez"
                />
              </div>
              <span className="content-text">
                <div className="random">
                  <i className="fas fa-random icon-color"></i>
                </div>
                ⤳ Butonuna tiklayarak rastgele veri seti olusturabilirsiniz.
              </span>
            </div>
          </div>
        </div>
        <div className="landing-content-two">
          <div className="landing-content-two-left">
            <div className="landing-content-two-left-content">
              <div className="option-card">
                <div className="click-icon">
                  <i className="fas fa-fingerprint"></i>
                </div>
                <div className="option-card-wrapper">
                  <h2 className="option-card-title">Aritmetik Ortalama</h2>
                  <p className="option-card-description">
                    Aritmetik ortamlama matematiksel biçimde anakütle için μ ve örneklem için (x)
                    olarak ifade edilir.
                  </p>
                </div>
              </div>
              <div className="two-text-container">
                <span className="text">
                  Karta tiklayarak yapmak istediginiz islemi secebilirsiniz, secmeden
                  ilerleyemezsiniz.
                </span>
                <Alert status="error" text="Fonksiyon Seçmelisiniz 🙄" />
              </div>
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
