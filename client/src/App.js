import {React, useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import AccountCategory from './components/AccountCategory/AccountCategory';
import AccountList from './components/AccountList/AccountList';
import HeadingTitle from './components/HeadingTitle/HeadingTitle';
import AdminPage from './components/AdminPage/AdminPage';
import UserPage from './components/UserPage/UserPage';
import LoadingContainer from './utils/LoadingContainer/LoadingContainer';
import {fetchAccount, fetchCard, fetchCategory, setNotification} from './actions/user_actions';
import './App.css';

const App = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("Welcome to gaming account shop");
    const [subTitle, setSubTitle] = useState("Most trusted gaming trading platform");
    //quan sát state của redux store
    const storeState = useSelector ((state) => state.user_reducer);
    const loginInfo = useSelector((state) => state.user_reducer.login);
    const currentBalance = useSelector((state) => state.user_reducer.credit);
    console.log(storeState);


    useEffect(()=> {
        dispatch(fetchAccount());
    },[title]);
    
    useEffect(()=> {
        dispatch(fetchCard());
    },[title]);

    useEffect(()=> {
        dispatch(fetchCategory());
    },[title]);
    
    if (loginInfo!= null && loginInfo.isAdmin === true) {
        return (<AdminPage userName ={loginInfo.userName}/>);
    } else if (loginInfo!= null && loginInfo.isAdmin === false){
        return (
            <UserPage user={loginInfo}
            balance={ currentBalance || loginInfo.balance }/>
        );
    } else if (loginInfo === undefined || loginInfo === null){
        return(
            <div>
                <NavBar/> 
                <HeadingTitle title={title} subtitle={subTitle} />
                <AccountCategory/>
                <AccountList/>
                <Footer/>
            </div>
        );
    } else {
        return (<LoadingContainer style={"spinner"}/>)
    }
}

export default App;