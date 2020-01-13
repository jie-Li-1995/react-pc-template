import {AUTH_SUCCESS, DECREMENT, INCREMENT} from "../action-types";

const userInfoInit = {
    name: '刘淇浩',
    age: 21,
    count: 90,
    Industry: '',
    Token: '',
    Display: '',
    Role: '',
    RolesSign: ''
}

const userInfo = function (state = userInfoInit, action) {
    switch (action.type) {
        case AUTH_SUCCESS :
            return {...state, name: action.data}
        case DECREMENT :
            return {...state, count: state.count - 10}
        case INCREMENT :
            return {...state, count: state.count + 10}
        default:
            return state
    }
}

export default userInfo
