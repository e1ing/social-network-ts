import {FC} from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
import headerImg from "../../asserts/images/headerImg.jpg";

type HeaderPropsType ={
    isAuth: boolean
    login: string
    getAuthUserData: () => void
}
const Header: FC<HeaderPropsType> = ({isAuth, login}) => {
    return <header className = {classes.header}>
        <img alt='Some beach here' src={headerImg}/>
        <div className={classes.loginBlock}>
            {isAuth ?  login
            :
            <NavLink to={'./login'}>Log In</NavLink>}
        </div>
    </header>;
}
export default Header;