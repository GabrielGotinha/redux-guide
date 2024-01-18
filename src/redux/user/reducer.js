import UserActionTypes from "./action-types"

const initalState = {
    currentUser: null,
}

const userReducer = (state = initalState, action) => {
    if(action.type === UserActionTypes.LOGIN ){
        return { ...state, currentUser: action.payload }
    }

    if(action.type === UserActionTypes.LOGOUT){
        return {...state, currentUser: null}
    }

    return state

}



export default userReducer