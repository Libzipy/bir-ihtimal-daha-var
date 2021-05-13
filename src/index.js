import React from 'react'
import ReactDOM from 'react-dom'
import './app/scss/index.scss'
import Router from './app/infrastructure/router'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './app/store/store'

/* React'in run edildigi kisim ve bizim single page application seklinde uygulamamizi
yurutmemizi saglayan kisim. Olusturdugumuz store ile butun uygulamadan global bir state
ulasmak icin olusturdugumuz store ile App componentini yani butun uygulamayi sarmaladigimiz
kisim.*/

//@desc public/index.html kismindaki <div id="root"></div> kismina butun uygulamayi render ediliyor
ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
)

reportWebVitals()
