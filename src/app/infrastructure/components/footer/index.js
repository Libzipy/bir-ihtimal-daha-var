import React from 'react'

const Footer = () => {
  const nowDate = new Date().getFullYear()
  return <div className="footer-container">© Copyright {nowDate} - Bir İhtimal Daha Var</div>
}

export default Footer
