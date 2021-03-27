import React, { useEffect, useRef } from 'react';

import NavBar from '../NavBar/NavBar';
import HeadingTitle from '../HeadingTitle/HeadingTitle';
import AccountCategory from '../AccountCategory/AccountCategory';
import AccountList from '../AccountList/AccountList';
import Footer from '../Footer/Footer';
import './UserPage.css';

const UserPage = ({userName}) => {
    const topRef = useRef();
    useEffect(() => {
        scrollToModal();
    });
    const scrollToModal = () => {
        topRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start", 
          inline: "nearest"
        });
      };
    return(
        <div>
            <div ref={topRef} className="scroll_position_holder"></div>
            <NavBar userName={userName} userMode="user"/>
            <HeadingTitle title={"Welcome to gaming account shop"} subtitle={`Chào mừng ${userName} đến với Gaming Account Shop`}/>
            <AccountCategory/>
            <AccountList/>
            <Footer/>
        </div>
    );
}
export default UserPage;