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
    // dữ liệu test, chưa kết nối db
    const [testUser, setTestUser] = useState({ userName: 'test', passWord: 'test', balance: 9999999});
    const [admin, setAdmin] = useState({ userName: 'admin', passWord: 'admin'});
    //quan sát state của redux store
    const loginInfo = useSelector((state) => state.user_reducer.login);
    console.log('Login info:' + JSON.stringify(loginInfo));
    const registerInfo = useSelector((state) => state.user_reducer.register);
    console.log('Register info:' + JSON.stringify(registerInfo));
    const creditInfo = useSelector((state) => state.user_reducer.credit);
    console.log('Credit info:' + JSON.stringify(creditInfo));
    const buyAccountInfo = useSelector((state) => state.user_reducer.account);
    console.log('Buy acc info:' + JSON.stringify(buyAccountInfo));
    const filterCategory = useSelector((state) => state.user_reducer.filterCategory);
    console.log('Filter info:' + JSON.stringify(filterCategory));

    if (loginInfo!= null && loginInfo.userName === admin.userName && loginInfo.passWord === admin.passWord) {
        return (<AdminPage userName ={admin.userName}/>);
    } else if (loginInfo!= null && loginInfo.userName === testUser.userName && loginInfo.passWord === testUser.passWord){
        return (<UserPage userName ={testUser.userName} balance={testUser.balance}/>);
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