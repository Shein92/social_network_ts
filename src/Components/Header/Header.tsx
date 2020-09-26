import React from 'react';
import head from './Header.module.css';
import { NavLink } from 'react-router-dom';

type HeaderPropsType = {
	isAuth: boolean,
	login: string
	logout: () => void
}

function Header(props: HeaderPropsType) {
	return (
		<header className={head.header}>
			<img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png" alt="" />
			<div className={head.loginBlock}>
				{props.isAuth
					? <div>{props.login} <button onClick={props.logout}>Logout</button></div>
					: <NavLink to={'/login'}>Login</NavLink>}
			</div>
		</header>
	)
}

export default Header;