import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Footer } from '../../components'

const NotFoundPage = () => {
  return (
    <>
      <Navbar />
      <div className="center notfound-container">
        <div className="notfound-wrapper center">
          <i className="far fa-compass"></i>
          <h1>Hey Hey Hey!</h1>
          <p>Bu sayfa bulunamıyor.</p>
          <button className="btn-lg submit-option">
            <Link to="/">☞ Anasayfaya dön</Link>
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default NotFoundPage
