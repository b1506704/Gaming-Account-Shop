import React, { useEffect, useRef } from 'react';

import NavBar from '../NavBar/NavBar';
import HeadingTitle from '../HeadingTitle/HeadingTitle';
import AccountList from '../AccountList/AccountList';
import Footer from '../Footer/Footer';
import './UserPage.css';

const UserPage = ({user}) => {
    return(
        <div>
            <NavBar userName={user.userName} userMode="user"/>
            <HeadingTitle title={`Chào mừng ${user.userName} đến với Gaming Account Shop`} subtitle={''}/>
            <AccountList/>
            <Footer/>
        </div>
    );
}
export default UserPage;