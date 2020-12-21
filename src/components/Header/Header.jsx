import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import classes from './Header.module.css';

const Header = (props) => {

    return (
        <header className={classes.header}>
            <img src="https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg" alt="image" />

            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Logout</button> </div>
                    : <NavLink className={classes.loginBlock__decoration} to={'/login'}>Login</NavLink>}
            </div>
        </header>

    )
}

export default Header