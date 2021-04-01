import {React, useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Card from './Card/Card';
import {createAccount, createCard} from '../../actions/user_actions';
import './CardPage.css';

const CardPage = ({context, setCurrentAccList, setCurrentCardList}) => {
    const dispatch = useDispatch();
    const accList = useSelector((state) => state.user_reducer.accountList);
    const cardList = useSelector((state) => state.user_reducer.cardList);
    const [createdAcc, setCurrentCreatedAcc] = useState({});
    const [createdCard, setCurrentCreatedCard] = useState({});
    const [category, setCategory] = useState([
        {name: '#Liên Minh Huyền Thoại', accNum: 25, sellNum: 10},
        {name: '#Free Fire', accNum: 15, sellNum: 5},
        {name: '#Dota2', accNum: 5, sellNum: 1}]);
    
    const addAccount = () => {
        setCurrentCreatedAcc(dispatch(createAccount({id: Math.random(),  price: 0, isBought: false, accOwner:'test' })));
        setCurrentAccList([...accList, createdAcc]);
    }
    const addCard = () => {
        setCurrentCreatedCard(dispatch(createCard({id: Math.random(),  carrier: 'Viettel', value: 50000 })));
        setCurrentCardList([...cardList, createdCard]);
    }
    
    switch (context) {
        case "list":
            return(
                <div className="card_page">
                    <p> <b>Tài khoản game</b> </p>
                    <div className="card_container">
                        {
                            accList != undefined ? 
                            accList.map ((item,key) => 
                            (<Card key={key} account={item} type={"acc"} mode={"view"}/>))
                            : (<div> Loading ... </div>)
                        }
                    </div>
                </div>
            );
        case "category":
            return(
                <div className="card_page">
                    <p> <b>Danh mục game</b> </p>
                    <div className="card_container">
                        {
                            category.map ((item,key) => 
                            (<Card key={key} category={item} type={"category"} mode={"view"}/>))
                        }
                    </div>
                </div>
            );
        case "edit_category":
            return(
                <div className="card_page">
                    <p> <b>Quản lý danh mục game</b> 
                        <button type="button" className="add_button drop_shadow"> Thêm </button>
                    </p>
                    <div className="card_container">
                        {
                            category.map ((item,key) => 
                            (<Card key={key} category={item} type={"category"} mode={"edit"}/>))
                        }
                    </div>
                </div>
            );   
        case "edit_list":
            return(
                <div className="card_page">
                    <p> <b>Quản lý tài khoản game</b> 
                        <button type="button" className="add_button drop_shadow" onClick={addAccount}> Thêm </button>
                    </p>
                    <div className="card_container">
                        {
                            accList != undefined ?
                            accList.map ((item,key) => 
                            (<Card key={key} account={item} type={"acc"} mode={"edit"}/>))
                            : null
                        }
                    </div>
                </div>
            );
        case "edit_card":
            return(
                <div className="card_page">
                    <p> <b>Quản lý thẻ nạp</b> 
                        <button type="button" className="add_button drop_shadow" onClick={addCard}> Thêm </button>
                    </p>
                    <div className="card_container">
                        {
                            cardList != undefined ?
                            cardList.map ((item,key) => 
                            (<Card key={key} card={item} type={"card"} mode={"edit"}/>))
                            : null
                        }
                    </div>
                </div>
            );                
        default:
            return (<div> Loading... </div>);
    }
}
export default CardPage;