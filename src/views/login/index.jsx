import React, { Component } from 'react'
import { Input, Button, Icon, message } from 'antd'
import './index.less'
import { loginApi } from '@/api'

export default class Login extends Component {
  state = {
    pName: '',
    SystemVersion: '',
    inputCode: '',
    params: {
      Name: '',
      Password: '',
      Code: '',
      ECode: ''
    }
  }

  componentDidMount () {
    this.toggleCode()
    this.getSystemName()
  }

  static goRegister = () => {
  }

  static resetPassword = () => {
  }

  handleLogin = async () => {
    if (!this.state.params.Name) {
      message.error('Please enter your Windows ID')
    } else if (!this.state.params.Password) {
      message.error('Please enter your password')
    } else if (!this.state.params.Code) {
      message.error('Please enter the verification code')
    } else {
      const res = await loginApi.login(this.state.params)
      if (res.data.Success) {
        window.sessionStorage.roles = res.data.Menus.join(',')
        window.sessionStorage.IsAdmin = res.data.IsAdmin
        window.sessionStorage.userName = res.data.Display
        this.props.history.push({ pathname: '/main', state: { day: 'Friday' } })
      } else {
        message.error(res.data.Message)
        this.toggleCode()
      }
    }
  }

  handleChange = (target, val) => {
    console.log(1111)
    let a = val.target.value
    this.setState(({ params }) => ({ params: { ...params, [target]: a } }))
  }

  toggleCode = async () => {
    let res = await loginApi.getVCode()
    if (res.data.Success) {
      let inputCode = 'url(' + res.data.Data.Img + ')'
      let ECode = res.data.Data.Code
      this.setState(({ params }) => ({ inputCode, params: { ...params, ECode } }))
    }
  }

  getSystemName = async () => {
    let res = await loginApi.getSystemName()
    if (res.data.Success) {
      let SystemVersion = res.data.Data.Version || ''
      let pName = res.data.Data.SystemNameEn || 'System Name'
      this.setState({ SystemVersion, pName })
    }
  }

  render () {
    return (
      <div id='login'>
        <div className='H6Logo'>
          <img src={require('@/assets/image/H6-logo.png')} alt='网络问题' />
        </div>
        <div className='loginMessage'>
          <h2 className='title'>
            {this.state.pName}&nbsp;
            <span>{this.state.SystemVersion}</span>
          </h2>
          <div className='left LoginDiv'>Log In</div>
          <div>
            <Input
              placeholder='Windows ID'
              autoFocus
              onChange={e => {
                this.handleChange('Name', e)
              }}
              prefix={<Icon type='user' style={{ color: 'rgba(255,255,255,.25)', fontSize: '16px' }} />}
            />
          </div>
          <div>
            <Input
              placeholder='Password'
              type='password'
              onChange={e => {
                this.handleChange('Password', e)
              }}
              prefix={<Icon type='lock' style={{ color: 'rgba(255,255,255,.25)', fontSize: '16px' }} />} />
          </div>
          <div className='verificationDiv'>
            <Input
              placeholder='Verification code'
              onChange={e => {
                this.handleChange('Code', e)
              }}
              prefix={<Icon
                type='safety-certificate'
                style={{ color: 'rgba(255,255,255,.25)', fontSize: '16px' }}
              />}
              suffix={<span
                className='VerificationCodeSpan'
                onClick={this.toggleCode}
                style={{ backgroundImage: this.state.inputCode }}
              />}
            />
          </div>
          <div className='right' onClick={this.resetPassword}><span className='ForgotPassword'>Forget password</span>
          </div>
          <div className='spaceBetween'>
            <div>
              <Button onClick={this.goRegister} className='DefaultBtn' type='primary'>Sign up</Button>
            </div>
            <div>
              <Button onClick={this.handleLogin} type='primary'>Login</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
