import React from 'react'

const Footer = () => {
  const nowDate = new Date().getFullYear()
  return <div className="footer-container">© Copyright {nowDate} - Bir Ihtimal Daha Var</div>
}

export default Footer
