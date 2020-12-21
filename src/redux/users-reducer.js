import { usersAPI } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'



let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followInProgress: []
}



const usersReducer = (state = initialState, action) => {

        switch(action.type) {
            case FOLLOW:
                return {
                    ...state, 
                    users: state.users.map( u => {
                        if (u.id === action.userId) {
                            return {...u, follow: true}
                        }
                        return u
                    } )
                }
            case UNFOLLOW:
                return {
                    ...state, 
                    users: state.users.map( u => {
                        if (u.id === action.userId) {
                            return {...u, follow: false}
                        }
                        return u
                    } )
                }
            case SET_USERS:
                return { ...state, users: action.users} 
            case SET_CURRENT_PAGE:
                return {...state, currentPage: action.currentPage}
            case SET_TOTAL_USERS_COUNT:
                return {...state, totalUsersCount: action.totalUsersCount}
            case TOGGLE_IS_FETCHING :
                return {...state, isFetching: action.isFetching}
            case TOGGLE_IS_FOLLOWING_PROGRESS :
                    return {...state,
                            followInProgress: action.isFetching
                            ?  [...state.followInProgress, action.userId] 
                            : state.followInProgress.filter(id => id !== action.userId)
                        }
    
            default:
                return state

        }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSucces = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching= (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingProgress= (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})


export const getUsers = (page, pageSize) => {
    return (dispatch) => {

    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))

    usersAPI.getUsers(page, pageSize)
            .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setUsersTotalCount(data.totalCount))
        })
}
}

export const follow = (id) => {
    return (dispatch) => {

        dispatch(toggleIsFollowingProgress(true, id))
        usersAPI.getFollow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(id))
                }
                dispatch(toggleIsFollowingProgress(false, id))

            })
}
}

export const unfollow = (id) => {
    return (dispatch) => {

        dispatch(toggleIsFollowingProgress(true, id))
        usersAPI.getUnfollow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSucces(id))
                }
                dispatch(toggleIsFollowingProgress(false, id))
            })
}
}

export default usersReducer
