import { getAuthUserData } from "./auth-reducer"

const SET_INITIALAZIED_SUCCESS = 'SET_INITIALAZIED_SUCCESS'



let initialState = {
    initialized: false
}



const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALAZIED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state

    }
}

export const setInitialaziedSuccess = () => ({ type: SET_INITIALAZIED_SUCCESS })

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all ([promise])
        .then(() => {
        dispatch(setInitialaziedSuccess())
    })


}


export default appReducer
