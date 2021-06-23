import {FC} from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

type HeaderPropsType ={
    isAuth: boolean
    login: string
    getAuthUserData: () => void
}
const Header: FC<HeaderPropsType> = ({isAuth, login}) => {
    return <header className = {classes.header}>
        <img alt='Some beach here' src='https://cdn.logo.com/hotlink-ok/logo-social-sq.png'/>
        <div className={classes.loginBlock}>
            {isAuth ?  login
            :
            <NavLink to={'./login'}>Log In</NavLink>}
        </div>
    </header>;
}
export default Header;