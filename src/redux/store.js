import dialogsReducer from './dialogs-reduer'
import profileReducer from './profile-reduer'
import sidebarReducer from './sidebar-reduer'

let store = {
  _state: {
    profile: {
        postsData:[
            {id: 1, message:"Hi, how are you, tell me please", likesCount: 10},
            {id: 2, message:"Hello, this is my first message", likesCount: 121},
            {id: 3, message:"just do it", likesCount: 1211},
            {id:4, message:"YoYo", likesCount: -1}
          ],
            newPostText: ''
    },
    dialogs: {
        dialogsData:[
            {id:1, name: 'Sergey'},
            {id:2, name: 'Vika'},
            {id:3, name: 'Sveta'},
            {id:4, name: 'Henadiy'},
            {id:5, name: 'Petro'},
            {id:6, name: 'Marinchik'}
          ],
        messagesData:[
            {id: 1, message: 'Hello world'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'Hi'},
            {id: 4, message: 'Hohohe111'},
            {id: 5, message: 'net'},
            {id: 6, message: 'n1o11111231'}
          ],
        newMessageBody: ""
    },
    sidebar: {}
  },
  getState() {
    return this._state
  },
  _callSubsriber() {
  
  },
  subscribe(observer) {
    this._callSubsriber = observer;
  },
  dispatch(action) {

    this._state.profile = profileReducer(this._state.profile, action)
    this._state.dialogs = dialogsReducer(this._state.dialogs, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubsriber(this._state)
}
}

export default store

window.store = store