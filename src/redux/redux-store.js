import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reduer";
import profileReducer from "./profile-reduer";
import sidebarReducer from "./sidebar-reduer";
import usersReducer from "./users-reducer";
import  thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";


const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

let store  = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store