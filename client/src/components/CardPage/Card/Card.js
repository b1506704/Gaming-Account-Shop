import {React, useState} from 'react';
import {useDispatch} from 'react-redux';

import {buyAccount, filterAccount} from '../../../actions/user_actions';
import './Card.css';
import utaha from '../../../assets/imgs/utaha_01.jpg'; 

//id: id của tài khoản game 
//name: tên của danh mục game
//price: giá của tài khoản game
//type: kiểu của Card là tài khoản game hay danh mục game
//mode: Card thuộc trang User hay trang Admin
//isBought: tình trạng đã bán hay chưa của tài khoản
//accNum: số tài khoản game hiện có
//sellNum: số tài khoản game đã bán
const Card = ({account, category, card, type, mode}) => {
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] =useState(false);
    
    const onCardSelect = () => {
      if (type === "acc") {
        dispatch(buyAccount(account));
        // import modal thông báo
        
        //
      } else {
        dispatch(filterAccount(category.name));
      }
    }
    const onCardEdit = () => {
      setIsEdit(true);
    }

    return (
      <div className="card_detail drop_shadow">
        <div className="title_bar drop_shadow">
          { type === "acc" ? account.id : type === "category" ? category.name : type ==="card" ? card.id : null }            
        </div>
        { 
          type === "acc" 
          ? <div className="acc_info">
              <div> Game: </div>
              <div> Giá: {account.price} VND </div>
              {
                mode === "edit"
                ? <div> 
                    <div>Tình trạng: {account.isBought ? "Đã bán" : "Chưa bán"}</div>
                    <div>Người mua: {account.accOwner}</div>
                  </div>
                : null
              }
              <div> Thuộc tính 1: </div>
              <div> Thuộc tính 2: </div>
              <div> Thuộc tính 3: </div>
              <div> Thuộc tính 4: </div>
              
            </div>
          : type === "category" 
            ? <div className="acc_info">
                <div> Số tài khoản hiện có: {category.accNum}</div>
                <div> Đã bán: {category.sellNum}</div>
              </div>
              : type === "card"
                ? <div className="acc_info">
                    <div> Nhà mạng: {card.carrier}</div>
                    <div> Giá trị: {card.value}</div>
                    <div> Tình trạng:  {card.isBought ? "Đã bán" : "Chưa bán" }</div>
                  </div>
                  : null   
        }
        {
          mode === "view"
          ?  <button type="button" className="price_button drop_shadow" onClick={onCardSelect}>
               {type === "acc" ? "Mua" : "Duyệt"}
            </button>
          : <button type="button" className="price_button drop_shadow" onClick={onCardEdit}>
              Sửa          
            </button>
        }
        <div className="image_container">
          <img className="image" alt="Loading..." src={utaha}/>
        </div>
      </div>
    );
};
export default Card;