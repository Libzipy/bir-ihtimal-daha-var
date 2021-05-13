/* eslint-disable */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Footer, Card, CheckoutSteps } from '../../components'
import option from './option'

const OptionPage = () => {
  const [x, setX] = useState(null)
  console.log(x)

  const handleClick = (id) => {
    setX(id)
  }

  return (
    <>
      <Navbar />
      <div className="center">
        <CheckoutSteps step1 step2 />
      </div>
      <div className="option-container">
        <div>
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

        <button className="btn-lg ">
          <Link to="/process">Devam Et</Link>
        </button>
      </div>
      <Footer />
    </>
  )
}

export default OptionPage
