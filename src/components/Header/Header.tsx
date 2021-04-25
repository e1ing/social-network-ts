import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return <header className = {classes.header}>
        <img alt='Some beach here' src='https://cdn.logo.com/hotlink-ok/logo-social-sq.png'/>
    </header>;
}
export default Header;