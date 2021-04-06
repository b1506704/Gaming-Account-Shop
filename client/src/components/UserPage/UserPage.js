import React, { useEffect, useRef } from 'react';

import NavBar from '../NavBar/NavBar';
import HeadingTitle from '../HeadingTitle/HeadingTitle';
import AccountCategory from '../AccountCategory/AccountCategory';
import AccountList from '../AccountList/AccountList';
import Footer from '../Footer/Footer';
import './UserPage.css';

const UserPage = ({user, balance}) => {
    return(
        <div>
            <NavBar userName={user.userName} userMode="user" balance= {balance}/>
            <HeadingTitle title={`Chào mừng ${user.userName} đến với Gaming Account Shop`} subtitle={''}/>
            <AccountCategory/>
            <AccountList/>
            <Footer/>
        </div>
    );
}
export default UserPage;