import {React, useState} from 'react';

import Card from './Card/Card';
import './CardPage.css';

const CardPage = ({context}) => {
    const [acc, setAcc] = useState([{id: '#01'},{id: '#02'},{id: '#03'},{id: '04'}]);
    const [category, setCategory] = useState([{name: '#Liên Minh Huyền Thoại'},{name: '#Free Fire'},{name: '#Dota2'}]);
    switch (context) {
        case "category":
            return(
                <div className="card_page">
                    <p> Danh mục game </p>
                    <div className="card_container">
                        {category.map ((item,key) => (<Card key={key} id={item.name}/>))}
                    </div>
                </div>
            );
        case "list":
            return(
                <div className="card_page">
                    <p> Tài khoản game </p>
                    <div className="card_container">
                        {acc.map ((item,key) => (<Card key={key} id={item.id}/>))}
                    </div>
                </div>
            ); 
        default:
            return (<div> Loading... </div>);
    }
}
export default CardPage;