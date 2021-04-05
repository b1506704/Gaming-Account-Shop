import {React, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Card from './Card/Card';
import LoadingContainer from '../../utils/LoadingContainer/LoadingContainer';
import {createAccount, createCard, createCategory, fetchCategory, fetchCard, fetchAccount, setNotification} from '../../actions/user_actions';
import getRndInteger from '../../utils/RandomGenerator';
import './CardPage.css';
import e from 'cors';

const CardPage = ({context}) => {
    const dispatch = useDispatch();
    const accList = useSelector((state) => state.user_reducer.accountList);
    const cardList = useSelector((state) => state.user_reducer.cardList);
    const categoryList = useSelector((state) => state.user_reducer.categoryList);
    const url = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAABMCAYAAAB9Pk6+AAACJUlEQVR42u3YQQEAMAgAIU2+6K7GPSAGe3NvAAAAACBqBRYAAAAAZQILAAAAgDSBBQAAAECawAIAAAAgTWABAAAAkCawAAAAAEgTWAAAAACkCSwAAAAA0gQWAAAAAGkCCwAAAIA0gQUAAABAmsACAAAAIE1gAQAAAJAmsAAAAABIE1gAAAAApAksAAAAANIEFgAAAABpAgsAAACANIEFAAAAQJrAAgAAACBNYAEAAACQJrAAAAAASBNYAAAAAKQJLAAAAADSBBYAAAAAaQILAAAAgDSBBQAAAECawAIAAAAgTWABAAAAkCawAAAAAEgTWAAAAACkCSwAAAAA0gQWAAAAAGkCCwAAAIA0gQUAAABAmsACAAAAIE1gAQAAAJAmsAAAAABIE1gAAAAApAksAAAAANIEFgAAAABpAgsAAACANIEFAAAAQJrAAgAAACBNYAEAAACQJrAAAAAASBNYAAAAAKQJLAAAAADSBBYAAAAAaQILAAAAgDSBBQAAAECawAIAAAAgTWABAAAAkCawAAAAAEgTWAAAAACkCSwAAAAA0gQWAAAAAGkCCwAAAIA0gQUAAABAmsACAAAAIE1gAQAAAJAmsAAAAABIE1gAAAAApAksAAAAANIEFgAAAABpAgsAAACANIEFAAAAQJrAAgAAACBNYAEAAACQJrAAAAAASBNYAAAAAKQJLAAAAADSBBYAAAAAaQILAAAAgDSBBQAAAEDaBznpvWmqACQLAAAAAElFTkSuQmCC";
    const searchInput = useRef(null);

    const addAccount = () => {
        dispatch(
            createAccount(
                {
                    id: getRndInteger(1,2000),  
                    price: getRndInteger(50000,2500000),
                    category: categoryList !=null && categoryList.length!= 0 ? categoryList[getRndInteger(0,  categoryList.length - 1)].name : null,
                    imgUrl: url,
                    isBought: false, 
                    accOwner: '',
                    attr1: getRndInteger(1,100),
                    attr2: getRndInteger(1,7),
                    attr3: getRndInteger(1,100),
                    attr4: getRndInteger(1,100)
                }
            )
        );
    }
    const addCard = () => {
        dispatch(createCard({id: getRndInteger(1,2000),  carrier: 'Viettel' || 'Mobifone' || 'Vinaphone', value: 50000 || 100000 || 1000000 }));
    }
    const addCategory = () => {
        dispatch(createCategory({name: getRndInteger(1,100), imgUrl: url, accNum: 0, sellNum: 0}));
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

    const sortAccount = () => {
        const rank = searchInput.current.value;
        dispatch(setNotification(`Lọc theo Rank ${rank}`));
    }
    
    switch (context) {
        case "list":
            return(
                <div className="card_page">
                    <div className="card_header"> <b>Tài khoản game ({accList ? accList.length : 0})</b> 
                        <button type="button" className="card_menu_button refresh_button_user drop_shadow" onClick={loadAccount}> Tải Mới  </button>
                        <form>
                            <input type="text" ref={searchInput} className="drop_shadow" placeholder="Tìm theo Rank"></input>
                            <input type="button" className="drop_shadow" onClick={sortAccount}></input>
                        </form>
                    </div>
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
        case "edit_card":
            return(
                <div className="card_page">
                    <div className="card_header"> <b>Quản lý thẻ nạp ({cardList ? cardList.length : 0})</b> 
                        <button type="button" className="card_menu_button drop_shadow" onClick={addCard}> Thêm </button>
                        <button type="button" className="card_menu_button refresh_button drop_shadow" onClick={loadCard}> Tải Mới  </button>
                    </div>
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