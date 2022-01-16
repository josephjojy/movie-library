import React from 'react'
import {Route, BrowserRouter, Switch} from 'react-router-dom'

import Dashboard from './components/Dashboard'
import MovieDetails from './components/MovieDetails'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/:id/details' component={MovieDetails} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
