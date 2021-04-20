import {React, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Card from './Card/Card';
import LoadingContainer from '../../utils/LoadingContainer/LoadingContainer';
import {createAccount, createCard, createCategory, fetchCategory, fetchCard, fetchAccount, setNotification, filterAccountByRank} from '../../actions/user_actions';
import getRndInteger from '../../utils/RandomGenerator';
import './CardPage.css';

const CardPage = ({context}) => {
    const dispatch = useDispatch();
    const accList = useSelector((state) => state.user_reducer.accountList);
    // const cardList = useSelector((state) => state.user_reducer.cardList);
    const categoryList = useSelector((state) => state.user_reducer.categoryList);
    const carrier = ['Viettel', 'Mobifone', 'Vinaphone'];   
    const cardValue = [20000, 50000, 100000, 200000, 500000, 1000000];   
    const searchInput = useRef(null);

    const addAccount = () => {
        dispatch(
            createAccount(
                {
                    id: getRndInteger(1,2000),  
                    price: 0,
                    category: categoryList !=null && categoryList.length!= 0 ? categoryList[getRndInteger(0,  categoryList.length - 1)].name : null,
                    imgUrl: null,
                    isBought: false, 
                    accSeller: 'admin',
                    attr1: '',
                    attr2: '',
                    attr3: '',
                    attr4: ''
                }
            )
        );
    }
    const addCard = () => {
        dispatch(createCard(
            {
                id: getRndInteger(1,2000),
                carrier: carrier[getRndInteger(0, carrier.length-1)],
                value: cardValue[getRndInteger(0, cardValue.length-1)]
            }
        ));
    }
    const addCategory = () => {
        dispatch(createCategory(
            {
                name: '',
                imgUrl: null,
                accNum: 0,
                sellNum: 0
            }));
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

    const searchByRank = (e) => {
        e.preventDefault();
        const rank = searchInput.current.value;
        if (rank.trim() === '') {
            dispatch(setNotification(`Vui lòng nhập Rank/Level`));
        } else {
            dispatch(filterAccountByRank(rank));
        }
    }

    switch (context) {
        case "list":
            return(
                <div className="card_page">
                    <div className="card_header"> <b>Tài khoản game ({accList ? accList.filter((acc) => acc.isBought === false).length : 0})</b> 
                        <button type="button" className="card_menu_button refresh_button_user drop_shadow" onClick={loadAccount}> Tải Mới  </button>
                        <form onSubmit={(e) => searchByRank(e)}>
                            <input type="text" ref={searchInput} className="drop_shadow" placeholder="Tìm theo Rank/Level"></input>
                            <input type="submit" className="drop_shadow"></input>
                        </form>
                    </div>
                    <div className="card_container">
                        {
                            accList != null && accList.length != 0 ? 
                            accList.filter((acc) => acc.isBought != true )
                            .map ((item,key) => 
                            (<Card key={key} account={item} type={"acc"} mode={"view"}/>))
                            : (<LoadingContainer style={'dot'}/>)
                        }
                    </div>
                </div>
            );
        case "category":
            return(
                <div className="card_page">
                    <div className="card_header"> <b>Danh mục game ({categoryList ? categoryList.length : 0})</b> 
                        <button type="button" className="card_menu_button refresh_button_user drop_shadow" onClick={loadCategory}> Tải Mới  </button>
                    </div>

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
                    <div className="card_header"> <b>Quản lý danh mục game ({categoryList ? categoryList.length : 0})</b> 
                        <button type="button" className="card_menu_button drop_shadow" onClick={addCategory}> Thêm </button>
                        <button type="button" className="card_menu_button refresh_button drop_shadow" onClick={loadCategory}> Tải Mới  </button>
                    </div>
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
                    <div className="card_header"> <b>Quản lý tài khoản game ({accList ? accList.length : 0})</b> 
                        <button type="button" className="card_menu_button drop_shadow" onClick={addAccount}> Thêm </button>
                        <button type="button" className="card_menu_button refresh_button drop_shadow" onClick={loadAccount}> Tải Mới  </button>
                    </div>
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
        default:
            return (<LoadingContainer style={'spinner'}/>);
    }
}
export default CardPage;