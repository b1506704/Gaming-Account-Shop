import React from 'react';

import './Footer.css';

const Footer = () => {
    const date = new Date();
    return(
        <footer>
            <div className="content-wrapper">
                <h1>&copy; { date.getFullYear() }, Gaming Account Shop</h1>
            </div>
        </footer>
    );
}
export default Footer;