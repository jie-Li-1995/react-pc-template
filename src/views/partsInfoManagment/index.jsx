import React, { Component } from 'react'
import { switchRoute } from '@/utils/renderRoutes'

export default class PartsInfoManagment extends Component {
  render () {
    return (
      <div className='PartsInfoManagment'>
        {switchRoute(this.props.children, this.props.match.path)}
      </div>
    )
  }
}
