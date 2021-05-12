import React from 'react'
import { LandingPage, AppPage, ContactPage, OptionPage, ProcessPage, ResultPage } from './views'
import { BrowserRouter as Routers, Route, Switch } from 'react-router-dom'

const Router = () => {
  return (
    <Routers>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/app" component={AppPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/app/option" component={OptionPage} />
        <Route path="/app/process" component={ProcessPage} />
        <Route path="/app/result" component={ResultPage} />
      </Switch>
    </Routers>
  )
}

export default Router
