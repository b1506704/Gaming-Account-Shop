import {React, useState} from 'react';

import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import AccountCategory from './components/AccountCategory/AccountCategory';
import AccountList from './components/AccountList/AccountList';
import HeadingTitle from './components/HeadingTitle/HeadingTitle';
import './App.css';

const App = () => {
    const [title, setTitle] = useState("Welcome to gaming account shop");
    const [subTitle, setSubTitle] = useState("Most trusted gaming trading platform");
    return(
        <div>
            <NavBar/>
            <HeadingTitle title={title} subtitle={subTitle} />
            <AccountList/>
            <AccountCategory/>
            <Footer/>
        </div>
    );
}

export default App;