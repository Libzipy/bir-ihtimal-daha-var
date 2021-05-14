/* eslint-disable */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Footer, Card, CheckoutSteps } from '../../components'
import option from './option'
import { useDispatch } from 'react-redux'
import { addOption } from '../../actions/creators/option-action'

const OptionPage = ({ history }) => {
  const [x, setX] = useState(null)
  console.log(x)

  const dispatch = useDispatch()

  const handleClick = (id) => {
    setX(id)
  }

  const onClickHandler = (e) => {
    e.preventDefault()
    dispatch(addOption({ x }))
    history.push('/process')
  }

  return (
    <>
      <Navbar />
      <div className="center">
        <CheckoutSteps step1 step2 />
      </div>
      <div className="option-container">
        <div className="option-wrapper">
          {option.map((opt) => (
            <Card
              key={opt.id}
              id={opt.id}
              title={opt.title}
              description={opt.description}
              handleClick={(value) => handleClick(value)}
            />
          ))}
        </div>

        <button className="btn-lg" onClick={onClickHandler}>
          Seç
        </button>
      </div>
      <Footer />
    </>
  )
}

export default OptionPage
