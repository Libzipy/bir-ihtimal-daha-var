import React from 'react'
import { Link } from 'react-router-dom'

/* eslint-disable react/prop-types */
const CheckoutSteps = ({ step1, step2, step3 }) => {
  return (
    <div className="checkout-steps-bar">
      <nav>{step1 ? <Link to="/start">1</Link> : <p className="disabled">1</p>}</nav>
      <nav>{step2 ? <Link to="/start">2</Link> : <p className="disabled">2</p>}</nav>
      <nav>{step3 ? <Link to="/start">3</Link> : <p className="disabled">3</p>}</nav>
    </div>
  )
}

export default CheckoutSteps
