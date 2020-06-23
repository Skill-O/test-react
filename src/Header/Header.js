import React from 'react';
import style from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
        <div className={style.header__wrap}>
            <div className="container">
                <div className={style.header__inner}>
                    <img className={style.logo_img} src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />
                    <div className={style.menu}>
                        <NavLink className={style.link} to="/weather" activeClassName={style.active_link}>Погода</NavLink>
                        <NavLink className={style.link} to="/page1" activeClassName={style.active_link}>Страница 1</NavLink>
                        <NavLink className={style.link} to="/page2" activeClassName={style.active_link}>Страница 2</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;