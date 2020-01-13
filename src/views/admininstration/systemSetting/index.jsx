import React, {Component} from 'react'
import propTypes from 'prop-types'

export default class SystemSetting extends Component {
    static propTypes = {
        name: propTypes.string.isRequired
    }
    static defaultProps = {
        name: '刘淇浩'
    }
    render() {
       return (
           <div className='SystemSetting'>
               SystemSetting
               <br/>
               {this.props.name}
           </div>
       )
    }
}
