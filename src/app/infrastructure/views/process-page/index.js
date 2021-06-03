/* eslint-disable */
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Navbar, Footer, Alert } from '../../components'
import { CheckoutSteps } from '../../components'
import Timelines from './timelines'
import data from './data'
import { addParam } from '../../actions/creators/param-actions'

const ProcessPage = ({ history }) => {
  const [n, setN] = useState('')
  const [r, setR] = useState('')
  const [error, setError] = useState(false)
  const option = useSelector((state) => state.viewOption.option.option)
  const selected = data.filter((s) => s.id === option)[0].title
  const dispatch = useDispatch()

  const onSubmitHandler = (e) => {
    e.preventDefault()
    dispatch(addParam({ n ,r }))
  }

  const pushResult = () => {
    if (n != '' && (option === 13 || option === 12)) {
      history.push('/result')
    } else if (n == '' && (option === 13 || option === 12)) {
      setError(true)
    } else {
      history.push('/result')
    }
  }

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
        <div className="center">
          {(option === 13 || option === 12) && (
            <form onSubmit={onSubmitHandler} className="form-container">
              <input
                className="form-container-input"
                type="text"
                placeholder="Toplam veri sayısını giriniz."
                value={n}
                onChange={(e) => setN(e.target.value)}
                required
                title="Veri Girmeden Devam edilmez"
              />
               <input
                className="form-container-input"
                type="text"
                placeholder="Seçilen veri sayısını giriniz"
                value={r}
                onChange={(e) => setR(e.target.value)}
                required
                title="Veri Girmeden Devam edilmez"
              />
              <button className="btn-lg submit-data" type="submit">
                Parametre Ekle
              </button>
            </form>
          )}
        </div>
        <div className="process-container"></div>
        <Timelines />
        {error && <Alert status="error" text="Parametre Girmelisiniz 🙄." />}
        <button className="btn-lg submit-option" onClick={pushResult}>
          Sonucu Gör
        </button>
      </div>
      <Footer />
    </>
  )
}

export default ProcessPage
