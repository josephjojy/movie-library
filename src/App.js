import React from 'react'
import {Route, BrowserRouter, Switch} from 'react-router-dom'

import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
