// 保存n个reducer函数的模块
import { combineReducers } from 'redux'
import counter from './modules/system'
import userInfo from './modules/userInfo'

export default combineReducers({
  counter,
  userInfo
})
