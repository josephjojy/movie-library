import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Dashboard from './components/Dashboard'
import MovieDetails from './components/MovieDetails'
import ErrorBoundary from './components/ErrorPages/ErrorBoundary'
import PageNotFound from './components/ErrorPages/PageNotFound'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ErrorBoundary>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/:id/details' component={MovieDetails} />
            <Route component={PageNotFound} />
          </Switch>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  )
}

export default App
