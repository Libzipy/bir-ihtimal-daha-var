import React from 'react'
import { Logo } from '../../../assets'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-content-left">
          <img className="logo" src={Logo} />
        </div>
        <div className="navbar-content-right">
          <button className="btn-lg navbar-button">Hadi Başlayalım</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
