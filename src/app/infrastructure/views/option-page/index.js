import React, { useState } from 'react'
import { Navbar, Footer, Card, CheckoutSteps, Alert } from '../../components'
import data from './data'
import { useDispatch, useSelector } from 'react-redux'
import { addOption } from '../../actions/creators/option-action'

/* eslint-disable react/prop-types */
const OptionPage = ({ history }) => {
  const [option, setOption] = useState(null)
  const [error, setError] = useState(false)

  const dispatch = useDispatch()
  const selectedData = useSelector((data) => data.viewData.data.data)

  const handleClick = (id) => {
    setError(false)
    setOption(id)
  }

  const onClickHandler = (e) => {
    e.preventDefault()
    dispatch(addOption({ option }))
    if (option) {
      history.push('/process')
    } else {
      setError(true)
    }
  }

  const selectTitle = () => {
    const selected = data.filter((x) => x.id === option)
    return selected[0].title
  }

  return (
    <>
      <Navbar />
      <div className="center">
        <CheckoutSteps step1 step2 />
      </div>
      <div className="option-container">
        <div className="option-data">
          <div className="option-data-title">Eklenen veri</div>
          <div className="option-data-data">{selectedData}</div>
        </div>
        <div className="option-wrapper">
          {data.map((opt) => (
            <Card
              key={opt.id}
              id={opt.id}
              title={opt.title}
              description={opt.description}
              handleClick={(value) => handleClick(value)}
            />
          ))}
        </div>
        <div className="option-select">
          {(option && <span>{selectTitle()}</span>) || <span>Secilmedi</span>}
          {error && <Alert status="error" text="Fonksiyon Seçmelisiniz 🙄" />}
          <button className="btn-lg submit-option" onClick={onClickHandler}>
            Seç
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default OptionPage
