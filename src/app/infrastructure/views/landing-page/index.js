import React from 'react'
import { Navbar } from '../../components'
import LandingTopContent from './landing-top-content'
import LandingMidContent from './landing-mid-content'
import LandingBotContent from './landing-bot-content'

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="landing-container">
        <LandingTopContent />
        <LandingMidContent />
        <LandingBotContent />
      </div>
    </>
  )
}

export default LandingPage
