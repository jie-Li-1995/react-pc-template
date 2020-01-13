import React, {Component} from 'react'
import propTypes from 'prop-types'
import connect from '@/redux/systemsetting'
import {Button, Input} from 'antd'

@connect
class SystemSetting extends Component {
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
               <br/>
               <Button onClick={this.props.decrement} type='primary'>加</Button>
               <br/>
               <Button onClick={this.props.increment} type='default'>减</Button>
               <Input onChange={val => this.props.ChangeUserInfo(val.target.value)} defaultValue={this.props.name}/>
           </div>
       )
    }
}

export default SystemSetting
