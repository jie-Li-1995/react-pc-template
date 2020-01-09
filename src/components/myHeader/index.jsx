import React, { Component } from 'react'
import { Icon } from 'antd'
import './index.less'

export default class MyHeader extends Component {
  state = {
    pName: 'skksks',
    SystemVersion: '124456',
    handleActive: 0,
    gettotlaAlertNum: null,
    currentTab: this.tab,
    getMessage: this.Message,
    HelpArr: [],
    dialogVisible: false,
    loading: false,
    SystemName: '',
    EMail: '',
    EMailto: ''
  }

  render() {
    return (
      <div className='MyHeader clear-fix'>
        <img onClick="IndexClick" className='fll' src={require('@/assets/image/H6-logo.png')} />
        <div className="HeaderText fll">
          { this.state.pName }&nbsp;
          <span>{ this.state.SystemVersion }</span>
        </div>
        <div className="HeaderBack flr">
            <span className="HeaderIcons" onClick="goInfoEdit">
              <i className="icon-info"/>
              Profile
            </span>
            <span className="HeaderIcons" onClick="GetH6HelpDocument">
              <i className="el-icon-question"/>
                Help
            </span>
            <span className="HeaderIcons" onClick="LogOut">
              <i className="icon-exit"/>
              Exit
            </span>
          </div>
      </div>
    )
  }
}