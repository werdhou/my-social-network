import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './DialogItem.module.css'

const DialogItem = (props) => {

    let path = `/dialogs/${props.id}`

    return (
    <div className={classes.dialog}>
        <img src="https://cdn1.flamp.ru/6e8b1e5fe1cc01a4d15e1d27c602dfa7.jpg"/>
    <NavLink to={path}>{props.name}</NavLink>
    </div>
    )
}

export default DialogItem