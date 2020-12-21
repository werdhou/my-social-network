import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import classes from './Dialogs.module.css'
import DialogsReduxForm from './DialogsForm'
import Message from './Message/Message'

const Dialogs = (props) => {
    
    let state = props.dialogs
    
    let dialogsElements = state.dialogsData
        .map ( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>) 
    let messagesElement = state.messagesData
        .map (messageEl => <Message message={messageEl.message} key={messageEl.id}  />)

    let addNewMessage = (formData) => {
        props.sendMessage(formData.newMessageBody)
    }
    return (
    <div className={classes.dialogs}>

        <div className={classes.dialogsItems}>
            {dialogsElements}           
        </div>
        <div className={classes.messages}>
            {messagesElement}
        </div>
        <DialogsReduxForm onSubmit={addNewMessage}/>
    </div>
    )
}

export default Dialogs