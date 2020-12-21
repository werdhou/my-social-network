import classes from '../FormsControl/FormsControl.module.css'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { requiredField } from '../../utils/validation/validators'
import { Input } from '../FormsControl/FormsControl'


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[requiredField]}
                    placeholder={"Email"} name={'email'} component={Input} /></div>
            <div>
                <Field validate={[requiredField]}
                    type={'password'} name={'password'} placeholder={"Password"} component={Input} /></div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input} />remember me</div>
            <div>
                {props.error && <div className={classes.formSummayError}>
                    {props.error}
                </div>}
                <button>Login</button></div>

        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default LoginReduxForm