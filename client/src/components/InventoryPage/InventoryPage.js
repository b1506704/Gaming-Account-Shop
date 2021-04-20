import { React, useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingContainer from '../../utils/LoadingContainer/LoadingContainer';

import Card from '../CardPage/Card/Card';
import './InventoryPage.css';

const InventoryPage = ({close}) => {
    const accList = useSelector((state) => state.user_reducer.accountList);
    const currentUser = useSelector((state) => state.user_reducer.login);

    const modalRef = useRef();

    useEffect(() => {
        scrollToModal();
    });
    
    const scrollToModal = () => {
        modalRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start", 
          inline: "nearest"
        });
      };

      return(
        <div className="inventory_container drop_shadow">
            <div ref={modalRef} className="scroll_position_holder"></div>
            <h1>Tài khoản đã mua</h1>
            <div className="item">
                {
                    accList != null && accList.length != 0 ? 
                    accList.filter((acc) => acc.isBought === true && currentUser.userName === acc.accOwner)
                    .map ((item,key) => 
                    (<Card key={key} account={item} type={"acc"} mode={"view"} isInventory={true}/>))
                    : (<LoadingContainer style={'dot'}/>)
                }
            </div>
            <div className="button_container">
                    <input type="button" className="drop_shadow neon_effect" value="Thoát" onClick={close}></input>
            </div>
        </div>
    );
}
export default InventoryPage;