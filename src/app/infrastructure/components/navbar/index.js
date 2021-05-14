import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../../../assets'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-content-left">
          <Link to="/">
            <img className="logo" src={Logo} />
          </Link>
        </div>
        <div className="navbar-content-right">
          <button className="btn-lg navbar-button">
            <Link to="/">
              <i className="fas fa-home" style={{ marginRight: '0.5rem' }}></i>
              Anasayfa
            </Link>
          </button>
          <button className="btn-lg navbar-button">
            <Link to="/app">
              <i className="fas fa-rocket" style={{ marginRight: '0.5rem' }}></i>Uygulama
            </Link>
          </button>
          <button className="btn-lg navbar-button">
            <Link to="/contact">
              <i className="far fa-address-book" style={{ marginRight: '0.5rem' }}></i>İletişim
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
