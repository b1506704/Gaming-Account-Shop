import React from 'react';

import './NavBar.css';

const NavBar = () => {
    return(
        <header>
            <div className="content-wrapper">
                <h1>Gaming Account Shop</h1>
                <nav>
                    <a href="">Trang chủ</a>
                    <a href="">Nạp thẻ</a>
                    <a href="">Đăng nhập</a>
                </nav>
            </div>
        </header>
    );
}
export default NavBar;