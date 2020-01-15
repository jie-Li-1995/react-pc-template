import { connect } from 'react-redux'
import { increment, decrement, ChangeUserInfo } from '@/store/actions'

export default connect(
  state => ({
    name: state.userInfo.name,
    age: state.userInfo.age,
    count: state.userInfo.count
  }),
  { increment, decrement, ChangeUserInfo }
)
