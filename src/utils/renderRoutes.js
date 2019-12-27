import React from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'

const renderRoutes = (routes) => {
    return  <Switch>
        {routes.map((route, i) => (
            <Route
                key={route.key || i}
                path={route.path}
                exact={route.exact}
                component={route.component}
            >
                {route.children ? renderRoutes(route.children) : ''}
            </Route>
        ))}
        <Redirect to={routes[0].path}/>
    </Switch>
}

export default renderRoutes
