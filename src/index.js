import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Router from '../src/app/Router'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
