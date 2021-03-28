import React, { useEffect, useRef } from 'react';

import NavBar from '../NavBar/NavBar';
import HeadingTitle from '../HeadingTitle/HeadingTitle';
import AccountCategory from '../AccountCategory/AccountCategory';
import AccountList from '../AccountList/AccountList';
import Footer from '../Footer/Footer';
import './UserPage.css';

const UserPage = ({userName, balance}) => {
    return(
        <div>
            <NavBar userName={userName} userMode="user" balance= {balance}/>
            <HeadingTitle title={"Welcome to gaming account shop"} subtitle={`Chào mừng ${userName} đến với Gaming Account Shop`}/>
            <AccountCategory/>
            <AccountList/>
            <Footer/>
        </div>
    );
}
export default UserPage;