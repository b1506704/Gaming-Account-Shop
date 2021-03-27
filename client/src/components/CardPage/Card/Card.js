import {React, useState} from 'react';

import './Card.css';
import utaha from '../../../assets/imgs/utaha_01.jpg'; 

const Card = ({id, price, type}) => {
      return (
        <div className="card_detail drop_shadow">
          <div className="title_bar drop_shadow">
            {id}           
          </div>
          { 
            type === "acc" 
            ? <div className="acc_info">
                <div> Danh mục game: </div>
                <div> Thuộc tính 1: </div>
                <div> Thuộc tính 2: </div>
                <div> Thuộc tính 3: </div>
                <div> Thuộc tính 4: </div>
              </div>
            : <div className="acc_info">
                <div> Số lượng tài khoản: </div>
                <div> Thuộc tính 1: </div>
                <div> Thuộc tính 2: </div>
                <div> Thuộc tính 3: </div>
                <div> Thuộc tính 4: </div>
              </div>   
          }
          <button type="button" className="price_button drop_shadow">
            Chi tiết          
          </button>
          <div className="image_container">
            <img className="image" alt="Loading..." src={utaha}/>
          </div>
        </div>
      );
};
export default Card;