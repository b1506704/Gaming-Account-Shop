import {React} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Card from './Card/Card';
import LoadingContainer from '../../utils/LoadingContainer/LoadingContainer';
import {createAccount, createCard, createCategory, fetchCategory, fetchCard, fetchAccount, setNotification} from '../../actions/user_actions';
import getRndInteger from '../../utils/RandomGenerator';
import './CardPage.css';

const CardPage = ({context}) => {
    const dispatch = useDispatch();
    const accList = useSelector((state) => state.user_reducer.accountList);
    const cardList = useSelector((state) => state.user_reducer.cardList);
    const categoryList = useSelector((state) => state.user_reducer.categoryList);
    
    const addAccount = () => {
        dispatch(
            createAccount(
                {
                    id: getRndInteger(1,2000),  
                    price: getRndInteger(50000,2500000), isBought: false, accOwner: 'U' + getRndInteger(1000,2000)
                }
            )
        );
    }
    const addCard = () => {
        dispatch(createCard({id: getRndInteger(1,2000),  carrier: 'Viettel', value: 50000 }));
    }
    const addCategory = () => {
        dispatch(createCategory({name: getRndInteger(1,100), accNum: getRndInteger(1,1000), sellNum: getRndInteger(1,1000)}));
    }

    const loadCategory = () => {
        dispatch(fetchCategory())
        .then(() => dispatch(setNotification("Tải lại thành công")));
    }

    const loadCard = () => {
        dispatch(fetchCard())
        .then(() => dispatch(setNotification("Tải lại thành công")));
    }

    const loadAccount = () => {
        dispatch(fetchAccount())
        .then(() => dispatch(setNotification("Tải lại thành công")));
    }
    
    switch (context) {
        case "list":
            return(
                <div className="card_page">
                    <p> <b>Tài khoản game ({accList ? accList.length : 0})</b> 
                        <button type="button" className="card_menu_button refresh_button_user drop_shadow" onClick={loadAccount}> Tải Mới  </button>
                    </p>
                    <div className="card_container">
                        {
                            accList != null && accList.length != 0? 
                            accList.map ((item,key) => 
                            (<Card key={key} account={item} type={"acc"} mode={"view"}/>))
                            : (<LoadingContainer style={'dot'}/>)
                        }
                    </div>
                </div>
            );
        case "category":
            return(
                <div className="card_page">
                    <p> <b>Danh mục game ({categoryList ? categoryList.length : 0})</b> 
                        <button type="button" className="card_menu_button refresh_button_user drop_shadow" onClick={loadCategory}> Tải Mới  </button>
                    </p>

                    <div className="card_container">
                        {
                            categoryList != null && categoryList.length != 0 ? 
                            categoryList.map ((item,key) => 
                            (<Card key={key} category={item} type={"category"} mode={"view"}/>))
                            : (<LoadingContainer style={'dot'}/>)
                        }
                    </div>
                </div>
            );
        case "edit_category":
            return(
                <div className="card_page">
                    <p> <b>Quản lý danh mục game ({categoryList ? categoryList.length : 0})</b> 
                        <button type="button" className="card_menu_button drop_shadow" onClick={addCategory}> Thêm </button>
                        <button type="button" className="card_menu_button refresh_button drop_shadow" onClick={loadCategory}> Tải Mới  </button>
                    </p>
                    <div className="card_container">
                        {
                            categoryList != null && categoryList.length != 0 ? 
                            categoryList.map ((item,key) => 
                            (<Card key={key} category={item} type={"category"} mode={"edit"}/>))
                            : (<LoadingContainer style={'bar'}/>)
                        }
                    </div>
                </div>
            );   
        case "edit_list":
            return(
                <div className="card_page">
                    <p> <b>Quản lý tài khoản game ({accList ? accList.length : 0})</b> 
                        <button type="button" className="card_menu_button drop_shadow" onClick={addAccount}> Thêm </button>
                        <button type="button" className="card_menu_button refresh_button drop_shadow" onClick={loadCard}> Tải Mới  </button>
                    </p>
                    <div className="card_container">
                        {
                            accList != null && accList.length != 0?
                            accList.map ((item,key) => 
                            (<Card key={key} account={item} type={"acc"} mode={"edit"}/>))
                            : <LoadingContainer style={'bar'}/>
                        }
                    </div>
                </div>
            );
        case "edit_card":
            return(
                <div className="card_page">
                    <p> <b>Quản lý thẻ nạp ({cardList ? cardList.length : 0})</b> 
                        <button type="button" className="card_menu_button drop_shadow" onClick={addCard}> Thêm </button>
                        <button type="button" className="card_menu_button refresh_button drop_shadow" onClick={loadCard}> Tải Mới  </button>
                    </p>
                    <div className="card_container">
                        {
                            cardList != null && cardList.length != 0 ?
                            cardList.map ((item,key) => 
                            (<Card key={key} card={item} type={"card"} mode={"edit"}/>))
                            : <LoadingContainer style={'bar'}/>
                        }
                    </div>
                </div>
            );                
        default:
            return (<LoadingContainer style={'spinner'}/>);
    }
}
export default CardPage;