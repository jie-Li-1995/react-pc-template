import {INCREMENT, DECREMENT, AUTH_SUCCESS, COUNTINCREMENT, COUNTDECREMENT} from './action-types'
//增加
export const increment = (val) => ({type: INCREMENT, data: val})
//减少
export const decrement = (val) => ({type: DECREMENT, data: val})

export const asyncIncrement = (val) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment(val))
        }, 1000)
    }
}

// 新的
export const ChangeUserInfo = (val) => ({type: AUTH_SUCCESS, data: val})


export const countincrement = (val) => ({type: COUNTINCREMENT, data: val})
//减少
export const countdecrement = (val) => ({type: COUNTDECREMENT, data: val})

