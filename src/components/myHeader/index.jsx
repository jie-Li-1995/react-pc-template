import React, { Component } from 'react'
import './index.less'
import {loginApi} from '@/api'

export default class MyHeader extends Component {
  state = {
    pName: 'skksks',
    SystemVersion: '124456'
  }
  componentDidMount() {
    this.getSystemName()
  }
  
  goInfoEdit = () => {
  }
  GetH6HelpDocument = () => {
  }
  LogOut = () => {
  }
  IndexClick = () => {
  }
  getSystemName = async () => {
    let res = await loginApi.getSystemName()
    if (res.data.Success) {
        let SystemVersion = res.data.Data.Version || ''
        let pName = res.data.Data.SystemNameEn || 'System Name'
        this.setState({ SystemVersion, pName })
    }
  }

  render() {
    return (
      <div className='MyHeader clear-fix'>
        <img onClick={this.IndexClick} className='fll' src={require('@/assets/image/H6-logo.png')} alt='' />
        <div className="HeaderText fll">
          { this.state.pName }&nbsp;
          <span>{ this.state.SystemVersion }</span>
        </div>
        <div className="HeaderBack flr">
            <span className="HeaderIcons" onClick={this.goInfoEdit}>
              <i className="icon-info"/>
              Profile
            </span>
            <span className="HeaderIcons" onClick={this.GetH6HelpDocument}>
              <i className="el-icon-question"/>
                Help
            </span>
            <span className="HeaderIcons" onClick={this.LogOut}>
              <i className="icon-exit"/>
              Exit
            </span>
          </div>
      </div>
    )
  }
}