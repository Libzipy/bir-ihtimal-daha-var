import React from 'react'
import { LandingPage, AppPage, ContactPage, OptionPage, ProcessPage, ResultPage } from './views'
import { BrowserRouter as Routers, Route, Switch } from 'react-router-dom'

const Router = () => {
  return (
    <Routers>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/app" component={AppPage} />
        <Route path="/option" component={OptionPage} />
        <Route path="/process" component={ProcessPage} />
        <Route path="/result" component={ResultPage} />
      </Switch>
    </Routers>
  )
}

export default Router
