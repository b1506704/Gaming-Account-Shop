import {React, useState} from 'react';

import './Card.css';
import utaha from '../../../assets/imgs/utaha_01.jpg'; 

const Card = ({id}) => {
      return (
        <div className="card_detail drop_shadow">
          <div className="title_bar drop_shadow">
            {id}           
          </div>
          <div className="acc_info">
            <div> Thuộc tính 1: </div>
            <div> Thuộc tính 2: </div>
            <div> Thuộc tính 3: </div>
            <div> Thuộc tính 4: </div>
          </div>
          <div className="image_container">
            <img className="image" alt="Loading..." src={utaha}/>
          </div>
        </div>
      );
};
export default Card;