import React from 'react'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

export const renderRoutes = (routes) => (
  <Router>
    <Switch>
      {switchRoute(routes)}
    </Switch>
  </Router>
)

export const switchRoute = (routes = [], matchUrl = '/') => (
  <Switch>
    {routes.map((route, i) => {
      const { path, exact, children = [] } = route
      return <Route
        key={path || i}
        exact={exact || false}
        path={matchUrl === '/' ? `/${path}` : `${matchUrl}/${path}`}
        render={(props) => (
          <route.component {...props} children={children} />
        )}
      />
    })}
    {routes.length !== 0 && <Redirect to={matchUrl === '/' ? `/${routes[0].path}` : `${matchUrl}/${routes[0].path}`} />}
  </Switch>
)
