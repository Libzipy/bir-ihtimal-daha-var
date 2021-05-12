import React from 'react'
import { Navbar } from '../../components'
import LandingTopContent from './landing-top-content'

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <LandingTopContent />
      <div className="landing-page">Landing Page</div>
    </>
  )
}

export default LandingPage
