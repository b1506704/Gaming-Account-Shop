import {React, useEffect, useState} from 'react';
import { useSelector } from 'react-redux';

import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import AccountCategory from './components/AccountCategory/AccountCategory';
import AccountList from './components/AccountList/AccountList';
import HeadingTitle from './components/HeadingTitle/HeadingTitle';
import AdminPage from './components/AdminPage/AdminPage';
import UserPage from './components/UserPage/UserPage';
import './App.css';

const App = () => {
    const [title, setTitle] = useState("Welcome to gaming account shop");
    const [subTitle, setSubTitle] = useState("Most trusted gaming trading platform");
    const [testUser, setTestUser] = useState({ userName: 'test', passWord: 'test'});
    const [admin, setAdmin] = useState({ userName: 'admin', passWord: 'admin'});
    // send to userinfo to db
    const loginInfo = useSelector((state) => state.user_reducer.login);
    console.log('Login info:' + JSON.stringify(loginInfo));
    const registerInfo = useSelector((state) => state.user_reducer.register);
    console.log('Register info:' + JSON.stringify(registerInfo));

    if (loginInfo!= null && loginInfo.userName === admin.userName && loginInfo.passWord === admin.passWord) {
        return (<AdminPage userName ={admin.userName}/>);
    } else if (loginInfo!= null && loginInfo.userName === testUser.userName && loginInfo.userName === testUser.passWord){
        return (<UserPage userName ={testUser.userName}/>);
    } else {
        return(
            <div>
                <NavBar/> 
                <HeadingTitle title={title} subtitle={subTitle} />
                <AccountCategory/>
                <AccountList/>
                <Footer/>
            </div>
        );
    }
}

export default App;