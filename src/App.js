import React from 'react'
import {Route, BrowserRouter, Switch} from 'react-router-dom'

import Dashboard from './components/Dashboard'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
