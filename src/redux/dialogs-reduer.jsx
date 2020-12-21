import { ReactReduxContext } from "react-redux"

const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {


    switch(action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return{
                ...state,
                messagesData: [...state.messagesData, {id: 7, message: body}]
            }
        default:
            return state    
    }



}

export const sendMessageCreator = (newMessageBody) =>({ type: SEND_MESSAGE, newMessageBody })


export default dialogsReducer