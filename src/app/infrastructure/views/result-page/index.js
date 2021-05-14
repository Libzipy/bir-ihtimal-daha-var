/* eslint-disable */
import React from 'react'
import { Navbar, Footer } from '../../components'
import { CheckoutSteps } from '../../components'
import { aritmetic, geometrik, harmonik } from './functions'
import { useSelector } from 'react-redux'

const ResultPage = () => {
  const option = useSelector((state) => state.viewOption)
  const data = useSelector((state) => state.viewData)
  const selected = option.option.option
  const selectedData = data.data.data.split(',').map(Number)

  const result =
    selected == 9
      ? geometrik(selectedData)
      : selected == 8
      ? aritmetic(selectedData)
      : selected == 7
      ? harmonik(selectedData)
      : 0

  return (
    <>
      <Navbar />
      <div className="center">
        <CheckoutSteps step1 step2 step3 step4 />
      </div>
      <div className="result-container">{<div>{result}</div>}</div>
      <Footer />
    </>
  )
}

export default ResultPage
