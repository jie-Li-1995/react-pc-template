import React, {Component} from 'react'
import '@/assets/css/index.less'

import {renderRoutes} from '@/utils/renderRoutes'
import routes from "@/router/router.js";

export default class App extends Component {
    render() {
        return (
           <div className='app'>
                {renderRoutes(routes)}
           </div>
       )
    }
}
