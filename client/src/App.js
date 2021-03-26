import {React, useState} from 'react';
import { useSelector } from 'react-redux';

import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import AccountCategory from './components/AccountCategory/AccountCategory';
import AccountList from './components/AccountList/AccountList';
import HeadingTitle from './components/HeadingTitle/HeadingTitle';
import AdminPage from './components/AdminPage/AdminPage';
import './App.css';

const App = () => {
    const [title, setTitle] = useState("Welcome to gaming account shop");
    const [subTitle, setSubTitle] = useState("Most trusted gaming trading platform");
    const [isAdmin, setIsAdmin] = useState(false);
    const loginInfo = useSelector((state) => state.user_reducer.loginSucces);
    console.log(loginInfo);
    if (loginInfo!= null && loginInfo.userName === "admin" && loginInfo.passWord === "admin") {
        return (
            <div>
                <NavBar/>
                <AdminPage/>
                <Footer/>
            </div>
        );
    } else {

        return(
            <div>
                <NavBar/>
                { isAdmin ? <AdminPage/> : (
                    <div>    
                        <HeadingTitle title={title} subtitle={subTitle} />
                        <AccountList/>
                        <AccountCategory/>
                    </div>
                )}
                <Footer/>
            </div>
        );
    }
}

export default App;