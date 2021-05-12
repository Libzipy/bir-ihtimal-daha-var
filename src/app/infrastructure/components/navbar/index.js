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
            <Link to="/">Anasayfa</Link>
          </button>
          <button className="btn-lg navbar-button">
            <Link to="/start">Uygulama</Link>
          </button>
          <button className="btn-lg navbar-button">
            <Link to="/contact">İletişim</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
