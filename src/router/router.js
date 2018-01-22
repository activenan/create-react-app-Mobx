/**
 * Created by admin on 2017/10/26.
 */

import React, { Component } from 'react'
import {
    HashRouter as Router,
    Route,
    Link} from 'react-router-dom'
import App from '../view/App.jsx'
import TodoView from '../view/TodoView.jsx'


const routes = [
    { path: '/',
        component: App,
        routes: [
            {
                path: '/todoview',
                component: TodoView,
            },
        ]
    }


]

const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes}/>
    )}/>
)


const RouteWithSubRoutesOne = (route) => {
    return (
        <Route path={route.path} component={route.component}/>
    )
}

class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route}/>
                    ))}
                </div>
            </Router>
        )
    }
}

export default Routes

