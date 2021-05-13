import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addData } from '../../actions/creators/data-actions'

/* eslint-disable react/prop-types */
const AppContainer = ({ history }) => {
  const [data, setData] = useState('')

  const dispatch = useDispatch()

  const onSubmitHandler = (e) => {
    e.preventDefault()
    dispatch(addData({ data }))
    history.push('/option')
  }

  const randomGenerator = () => {
    setData('10, 15, 15')
  }

  return (
    <div className="app-container">
      <div className="app-wrapper">
        <div className="app-description">
          <h1>Veri Setini Giriniz</h1>
          <p>Veri setini gir, ornek olarak 10, 15, 15</p>
        </div>
        <form onSubmit={onSubmitHandler} className="form-container">
          <div className="form-container-random" onClick={randomGenerator}>
            <i className="fas fa-random icon-color"></i>
          </div>
          <input
            className="form-container-input"
            type="text"
            placeholder="Veri setini gir"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
            title="Veri Girmeden Devam edilmez"
          />
          <button className="btn-lg submit-data" type="submit">
            Veri Ekle
          </button>
        </form>
      </div>
    </div>
  )
}

export default AppContainer
