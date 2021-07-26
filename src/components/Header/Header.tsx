import {FC} from 'react';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';
import logo from "../../asserts/images/logo.png";

type HeaderPropsType = {
    isAuth: boolean
    email: string
    logout: () => void
}
const Header: FC<HeaderPropsType> = ({isAuth, email, logout}) => {
    return <header className={classes.header}>
        <img alt='Some beach here' src={logo}/>
        <div className={classes.loginBlock}>
            {isAuth
                ? <div> {email} - <button onClick={logout}>Logout</button></div>
                : <NavLink to={'./login'}>Login</NavLink>}
        </div>
    </header>;
}
export default Header;