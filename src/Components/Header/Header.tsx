import React from 'react';
import head from './Header.module.css';
import { NavLink } from 'react-router-dom';

type HeaderPropsType = {
    isAuth: boolean,
    login: string
}

function Header (props: HeaderPropsType) {
    return (
        <header className={head.header}>
            <img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png" alt=""/>
            <div className={head.loginBlock}>
                {props.isAuth ? props.login 
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;