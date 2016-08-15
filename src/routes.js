import React from 'react'
import { Route, IndexRoute, } from 'react-router'

import App from './components/App'
import NotFoundPage from './components/NotFoundPage'
import AboutPage from './containers/AboutPage'

export default (
  <Route path="/about" component={App}>
    <IndexRoute component={AboutPage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/*" component={NotFoundPage} />
  </Route>
)
