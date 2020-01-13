import {COUNTDECREMENT, COUNTINCREMENT} from "../action-types";

function counter(state = 0, action) {
    switch (action.type) {
        case COUNTINCREMENT :
            return state + action.data
        case COUNTDECREMENT :
            return state - action.data
        default:
            return state
    }
}

export default counter
