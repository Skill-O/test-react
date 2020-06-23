import React from 'react';
import style from './Footer.module.css';

const Footer = () => {
    return(
        <div className={style.footer__wrap}>
            <div className="container">
                <div className={style.footer__inner}>
                    created by me
                </div>
            </div>
        </div>
    );
}

export default Footer;