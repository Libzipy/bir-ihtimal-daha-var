import React from 'react'
import { Navbar, Footer } from '../../components'
import App from './app'

/* eslint-disable react/prop-types */
const AppPage = ({ history }) => {
  return (
    <>
      <Navbar />
      <App history={history} />
      <Footer />
    </>
  )
}

export default AppPage
