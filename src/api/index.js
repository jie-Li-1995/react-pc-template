import axios from './config'
import qs from 'qs'

function get (api) {
  return body => axios.get(api, {params: body})
}

function post (api) {
  return body => axios.post(api, qs.stringify(body))
}

export const loginApi = {
  getSystemName: get('SystemConfig/GetSystemName'),
  getVCode: get('Account/GetVCode'),
  login: post('account/login')
}
