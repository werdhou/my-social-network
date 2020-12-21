import { React } from "react";
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, requiredField } from "../../../utils/validation/validators";
import { Textarea } from "../../FormsControl/FormsControl";

const maxLength10 = maxLengthCreator(10)

const MyPostsForms = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
        <Field 
        validate={[requiredField, maxLength10]}
        placeholder={"Введите текст"} name={'addNewPost'} 
        component={Textarea}
        />
    </div>
    <div>
        <button onClick={props.onAddPost}>
            Add post
        </button>
    </div>
    </form>
    )
}

const MyPostsReduxForm = reduxForm({
    form: 'newPost'
})(MyPostsForms)

export default MyPostsReduxForm