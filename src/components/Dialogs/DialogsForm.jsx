import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, requiredField } from '../../utils/validation/validators'
import { Textarea } from '../FormsControl/FormsControl'

const maxLength50 = maxLengthCreator(50)


const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[requiredField, maxLength50]}
                component={Textarea} name={'newMessageBody'}
                
                />
                <br/></div>
        <div>
            <button>add message</button></div>
        </form>
    )
}

const DialogsReduxForm = reduxForm({
    form: 'dialogAddMessageForm'
})(DialogsForm)

export default DialogsReduxForm
