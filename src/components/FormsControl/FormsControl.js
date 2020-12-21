import React from 'react'
import classes from './FormsControl.module.css'



export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={classes.textarea + ' ' + (hasError ? classes.error : "")}>
            <textarea {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>

    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={classes.textarea + ' ' + (hasError ? classes.error : "")}>
            <input {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>

    )
}