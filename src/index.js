import React from 'react'
import ReactDOM from 'react-dom'
import './app/scss/index.scss'
import Router from './app/infrastructure/router'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
