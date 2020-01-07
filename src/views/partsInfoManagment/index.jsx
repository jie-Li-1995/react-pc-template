import React, {Component} from 'react'
import {switchRoute} from '@/utils/renderRoutes'

export default class PartsInfoManagment extends Component {
    render() {
       return (
           <div className='PartsInfoManagment'>
               <h1>PartsInfoManagment</h1>
               <div style={{color: 'red'}}>
                {switchRoute(this.props.children, this.props.match.path)}
              </div>
           </div>
       )
    }
}
