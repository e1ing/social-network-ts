import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import {HeaderContainerPropsType} from "./HeaderContainer";



const Header: FC<HeaderContainerPropsType> = ({isAuth, login, logout}) => {
    return <header className = {classes.header}>
        <img alt='Some beach here' src='https://cdn.logo.com/hotlink-ok/logo-social-sq.png'/>
        <div className={classes.loginBlock }>
            {isAuth
                ? <div>{login} - <button onClick={logout}>Log out</button></div>
                : <NavLink to={"/login"}>Login</NavLink>
            }
        </div>
    </header>;
}
export default Header;