/* eslint-disable */
import React from 'react'
import { Bar } from 'react-chartjs-2'
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
  const { n, r } = param
  const selected = option.option.option
  const selectedData = data.data.data.split(',').map(Number)
  const converN = parseInt(n)
  const converR = parseInt(r)
  const grup = localStorage.getItem('harmonik')

  const result =
    selected == 14
      ? histogram(selectedData, grup)
      : selected == 13
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
  let veri, options
  if (selected == 14) {
    veri = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: 'Frekans',
          data: result, // Sonuç Buraya
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }
      ]
    }

    options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  }

  return (
    <>
      <Navbar />
      <div className="center">
        <CheckoutSteps step1 step2 step3 step4 />
      </div>

      {selected == 14 ? (
        <div className="center">
          <div style={{ width: '800px', height: 'auto', marginTop: '1rem' }}>
            <Bar data={veri} options={options} />
          </div>
        </div>
      ) : (
        <div className="result-container">
          <div className="result-text">
            <div className="result-title">Sonuç</div>
            {result}
          </div>
        </div>
      )}
      <Footer />
    </>
  )
}

export default ResultPage
