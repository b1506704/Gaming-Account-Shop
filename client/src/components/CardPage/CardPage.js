import {React, useState} from 'react';

import Card from './Card/Card';
import './CardPage.css';

const CardPage = ({context}) => {
    //get data from db
    const [acc, setAcc] = useState([{id: '#01'},{id: '#02'},{id: '#03'},{id: '#04'},{id: '#05'},{id: '#06'},{id: '#07'}]);
    const [category, setCategory] = useState([{name: '#Liên Minh Huyền Thoại'},{name: '#Free Fire'},{name: '#Dota2'}]);
    
    switch (context) {
        case "list":
            return(
                <div className="card_page">
                    <p> <b>Tài khoản game</b> </p>
                    <div className="card_container">
                        {acc.map ((item,key) => (<Card key={key} id={item.id} type={"acc"}/>))}
                    </div>
                </div>
            );
        case "category":
            return(
                <div className="card_page">
                    <p> <b>Danh mục game</b> </p>
                    <div className="card_container">
                        {category.map ((item,key) => (<Card key={key} id={item.name} type={"category"}/>))}
                    </div>
                </div>
            );
        case "edit_category":
            return(
                <div className="card_page">
                    <p> <b>Quản lý danh mục game</b> 
                        <button type="button" className="add_button drop_shadow"> Thêm danh mục </button>
                    </p>
                    <div className="card_container">
                        {category.map ((item,key) => (<Card key={key} id={item.name} type={"category"}/>))}
                    </div>
                </div>
            );   
        case "edit_list":
            return(
                <div className="card_page">
                    <p> <b>Quản lý tài khoản game</b> 
                        <button type="button" className="add_button drop_shadow"> Thêm tài khoản game </button>
                    </p>
                    <div className="card_container">
                        {acc.map ((item,key) => (<Card key={key} id={item.id} type={"acc"}/>))}
                    </div>
                </div>
            );             
        default:
            return (<div> Loading... </div>);
    }
}
export default CardPage;