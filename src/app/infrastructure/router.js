import React from 'react'
import { LandingPage, StartPage } from './views'
import { BrowserRouter as Routers, Route, Switch } from 'react-router-dom'

const Router = () => {
  return (
    <Routers>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/start" component={StartPage} />
      </Switch>
    </Routers>
  )
}

export default Router
