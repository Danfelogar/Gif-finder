import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGifts }from '@fortawesome/free-solid-svg-icons';

export const NavBar = () => {
    return (
        <div className="container-nav">
            <picture className="container-nav-logo">
            <FontAwesomeIcon icon={ faGifts } className="container-nav-logo-icons" />
            </picture>
            <section className="container-nav-opts">
                <a href="/">About</a>
                <a href="/">Services</a>
                <a href="/">Contact Us</a>
            </section>
            <button className="contaner-nav-btn">Sign In</button>
        </div>
    )
}
