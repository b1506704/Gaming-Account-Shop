import React from 'react';

import './Footer.css';

const Footer = () => {
    const date = new Date();
    return(
        <footer>
            <div className="content-wrapper">
                <p>&copy; { date.getFullYear() }, Gaming Account Shop</p>
            </div>
        </footer>
    );
}
export default Footer;