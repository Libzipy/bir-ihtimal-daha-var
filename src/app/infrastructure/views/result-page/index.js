/* eslint-disable */
import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Navbar, Footer } from '../../components'
import { CheckoutSteps } from '../../components'
import {
  aritmetic,
  geometrik,
  harmonik,
  oms,
  standartsapma,
  degisim,
  modeCount,
  median,
  varyans,
  size,
  comp,
  perm,
  rank,
  histogram
} from './functions'
import { useSelector } from 'react-redux'

const ResultPage = () => {
  const option = useSelector((state) => state.viewOption)
  const data = useSelector((state) => state.viewData)
  const param = useSelector((state) => state.viewParam.param)
  const {n,r} = param
  const selected = option.option.option
  const selectedData = data.data.data.split(',').map(Number)
  const converN = parseInt(n)
  const converR = parseInt(r)
  
  const result =
    selected == 14
      ? histogram(data, grup)
      :  selected == 13
      ? comp(converN, converR)
      : selected == 12
      ? perm(converR, converR)
      : selected == 11
      ? rank(selectedData)
      : selected == 10
      ? size(selectedData)
      : selected == 9
      ? geometrik(selectedData)
      : selected == 8
      ? aritmetic(selectedData)
      : selected == 7
      ? harmonik(selectedData)
      : selected == 6
      ? degisim(selectedData)
      : selected == 5
      ? oms(selectedData)
      : selected == 4
      ? varyans(selectedData)
      : selected == 3
      ? median(selectedData)
      : selected == 2
      ? standartsapma(selectedData)
      : selected == 1
      ? modeCount(selectedData)
      : 0

      const getRandomColor = () => {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

  return (
    <>
      <Navbar />
      <div className="center">
        <CheckoutSteps step1 step2 step3 step4 />
      </div>
      <div className="result-container">
        {
          <div className="result-text">
            <div className="result-title">Sonuç</div>
            {result}
          </div>
        }
      </div>
      <Footer />
    </>
  )
}

export default ResultPage
