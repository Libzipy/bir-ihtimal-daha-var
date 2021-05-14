import React, { useState } from 'react'
import { Navbar, Footer, Card, CheckoutSteps } from '../../components'
import data from './data'
import { useDispatch } from 'react-redux'
import { addOption } from '../../actions/creators/option-action'

/* eslint-disable react/prop-types */
const OptionPage = ({ history }) => {
  const [option, setOption] = useState(null)
  // console.log('option =>', option)
  const dispatch = useDispatch()

  const handleClick = (id) => {
    setOption(id)
  }

  const onClickHandler = (e) => {
    e.preventDefault()
    dispatch(addOption({ option }))
    history.push('/process')
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
          {option ? <span>{selectTitle()}</span> : <span>Secilmedi</span>}
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
