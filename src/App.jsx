import React, {Component} from 'react'
import {HashRouter as Router} from 'react-router-dom'
import '@/assets/css/index.less'

import renderRoutes from './utils/renderRoutes'
import routes from "./router/router.js";

export default class App extends Component {
    render() {
        return (
           <div className='app'>
               <Router>
                   {renderRoutes(routes)}
               </Router>
           </div>
       )
    }
}
