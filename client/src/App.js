import {React, useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import AccountCategory from './components/AccountCategory/AccountCategory';
import AccountList from './components/AccountList/AccountList';
import HeadingTitle from './components/HeadingTitle/HeadingTitle';
import AdminPage from './components/AdminPage/AdminPage';
import UserPage from './components/UserPage/UserPage';
import {fetchAccount} from './actions/user_actions';
import './App.css';

const App = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("Welcome to gaming account shop");
    const [subTitle, setSubTitle] = useState("Most trusted gaming trading platform");
    const [currentAccList, setCurrentAccList] = useState([{id: '1',  price: 0, isBought: false, accOwner:'test' }]);
    useEffect(()=> {
        dispatch(fetchAccount());
    },[currentAccList, setCurrentAccList]);
    
    const [testUser, setTestUser] = useState({ });
    const [admin, setAdmin] = useState({ });
    //quan sát state của redux store
    const storeState = useSelector ((state) => state.user_reducer);
    console.log(storeState);
    const loginInfo = useSelector((state) => state.user_reducer.login);
    const logoutInfo = useSelector((state) => state.user_reducer.logout);
    if (loginInfo!= null && loginInfo.isAdmin === true) {
        return (<AdminPage userName ={loginInfo.userName} currentAccList={currentAccList} setCurrentAccList={setCurrentAccList}/>);
    } else if (loginInfo!= null && loginInfo.isAdmin === false){
        return (<UserPage userName ={loginInfo.userName} balance={loginInfo.balance}/>);
    } else if (loginInfo === undefined || loginInfo === null){
        return(
            <div>
                <NavBar/> 
                <HeadingTitle title={title} subtitle={subTitle} />
                <AccountCategory/>
                <AccountList currentAccList={currentAccList}/>
                <Footer/>
            </div>
        );
    }
}

export default App;