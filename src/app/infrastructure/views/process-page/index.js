import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Navbar, Footer } from '../../components'
import { CheckoutSteps } from '../../components'
import Timelines from './timelines'
import data from './data'
import { addParam } from '../../actions/creators/param-actions'

const ProcessPage = () => {
  const [param, setParam] = useState('')
  const option = useSelector((state) => state.viewOption.option.option)
  const selected = data.filter((s) => s.id === option)[0].title
  const dispatch = useDispatch()

  console.log(option)

  const onSubmitHandler = (e) => {
    e.preventDefault()
    dispatch(addParam({ param }))
  }

  const getParam = () => {
    return (
      <form onSubmit={onSubmitHandler} className="form-container">
        <input
          className="form-container-input"
          type="text"
          placeholder="Parametre gir"
          value={param}
          onChange={(e) => setParam(e.target.value)}
          required
          title="Veri Girmeden Devam edilmez"
        />
        <button className="btn-lg submit-data" type="submit">
          Parametre Ekle
        </button>
      </form>
    )
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
        <div>{option === 13 || option === 12 ? getParam() : null}</div>
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

// state.viewOption.option.option.option
// 13 - kombinasyon
// 12 - permutasyon
