import {React, useState} from 'react';

import Card from './Card/Card';
import './CardPage.css';

const CardPage = ({context}) => {
    //get data from db
    const [acc, setAcc] = useState([
        {id: '#01',  price: 15000, isBought: false, accOwner:'test' },
        {id: '#02', price: 35000, isBought: true, accOwner:'test2'},
        {id: '#03', price: 45000, isBought: false, accOwner:'test3'},
        {id: '#04', price: 110000, isBought: false, accOwner:'test'},
        {id: '#05', price: 700000, isBought: true, accOwner:'test4'},
        {id: '#06', price: 50000, isBought: false, accOwner:'test'},
        {id: '#07', price: 69000, isBought: true, accOwner:'test'},
        {id: '#08', price: 365000, isBought: false, accOwner:'test2'},
    ]);
    const [category, setCategory] = useState([
        {name: '#Liên Minh Huyền Thoại', accNum: 25, sellNum: 10},
        {name: '#Free Fire', accNum: 15, sellNum: 5},
        {name: '#Dota2', accNum: 5, sellNum: 1}]);
    
    switch (context) {
        case "list":
            return(
                <div className="card_page">
                    <p> <b>Tài khoản game</b> </p>
                    <div className="card_container">
                        {
                            acc.map ((item,key) => 
                            (<Card key={key} account={item} type={"acc"} mode={"view"}/>))
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
                        <button type="button" className="add_button drop_shadow"> Thêm </button>
                    </p>
                    <div className="card_container">
                        {
                            acc.map ((item,key) => 
                            (<Card key={key} account={item} type={"acc"} mode={"edit"}/>))
                        }
                    </div>
                </div>
            );             
        default:
            return (<div> Loading... </div>);
    }
}
export default CardPage;