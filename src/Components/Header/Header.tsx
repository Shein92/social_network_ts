import React from 'react';
import head from './Header.module.css';

function Header () {
    return (
        <header className={head.header}>
            <img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png" alt=""/>
        </header>
    )
}

export default Header;