import {React, useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import AccountCategory from './components/AccountCategory/AccountCategory';
import AccountList from './components/AccountList/AccountList';
import HeadingTitle from './components/HeadingTitle/HeadingTitle';
import AdminPage from './components/AdminPage/AdminPage';
import UserPage from './components/UserPage/UserPage';
import LoadingContainer from './utils/LoadingContainer/LoadingContainer';
import {fetchAccount, fetchCard, fetchCategory} from './actions/user_actions';
import './App.css';

const App = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("Welcome to gaming account shop");
    const [subTitle, setSubTitle] = useState("Most trusted gaming trading platform");
    const [currentAccList, setCurrentAccList] = useState([{id: '1',  price: 0, isBought: false, accOwner:'test' }]);
    const [currentCardList, setCurrentCardList] = useState([{id: 'test',  carrier: 'Viettel', value: 50000 }]);
    const [currentCategoryList, setCurrentCategoryList] = useState([{name: '', accNum: 0, sellNum: 0}]);
    
    useEffect(()=> {
        dispatch(fetchAccount());
    },[currentAccList, setCurrentAccList]);
    
    useEffect(()=> {
        dispatch(fetchCard());
    },[currentCardList, setCurrentCardList]);

    useEffect(()=> {
        dispatch(fetchCategory());
    },[currentCategoryList, setCurrentCategoryList]);
    
    //quan sát state của redux store
    const storeState = useSelector ((state) => state.user_reducer);
    const loginInfo = useSelector((state) => state.user_reducer.login);
    const currentBalance = useSelector ((state) => state.user_reducer.credit);
    console.log(storeState);
    
    if (loginInfo!= null && loginInfo.isAdmin === true) {
        return (<AdminPage userName ={loginInfo.userName} setCurrentAccList={setCurrentAccList} setCurrentCardList={setCurrentCardList} setCurrentCategoryList={setCurrentCategoryList}/>);
    } else if (loginInfo!= null && loginInfo.isAdmin === false){
        return (
            <UserPage userName ={loginInfo.userName} 
            balance={ currentBalance || loginInfo.balance}/>
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