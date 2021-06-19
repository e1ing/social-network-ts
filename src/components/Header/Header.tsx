import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
import {InitialStateType} from "../../redux/auth-reducer";

type HeaderPropsType ={
    data: InitialStateType
}
const Header: React.FC<HeaderPropsType> = ({data}) => {
    return <header className = {classes.header}>
        <img alt='Some beach here' src='https://cdn.logo.com/hotlink-ok/logo-social-sq.png'/>
        <div className={classes.loginBlock}>
            {data.isAuth ?  data.login
            :
            <NavLink to={'./login'}>Log In</NavLink>}
        </div>
    </header>;
}
export default Header;