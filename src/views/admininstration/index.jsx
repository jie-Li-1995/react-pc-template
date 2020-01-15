import React, { Component } from 'react'
import { switchRoute } from '@/utils/renderRoutes'

export default class Admininstration extends Component {
  state = {
    lol: 'Admininstration'
  }

  render () {
    return (
      <div className='Admininstration'>
        <h1>Admininstration</h1>
        <div>
          {switchRoute(this.props.children, this.props.match.path)}
        </div>
      </div>
    )
  }
}
