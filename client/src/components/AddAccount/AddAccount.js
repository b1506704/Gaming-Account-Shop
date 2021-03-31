//todo
import { React, useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import {createAccount} from '../../actions/user_actions';
import './AddAccount.css';

const AddAccount = ({close}) => {
    const dispatch = useDispatch();
    const [accInfo, setAccInfo] = useState({
        id: '',
        category: '',
        imgUrl: '',
        price: ''
    });
    const modalRef = useRef();

    useEffect(() => {
        if (accInfo.id != '') {
            dispatch(createAccount(accInfo));
        }
    },[accInfo, setAccInfo]);

    useEffect(() => {
        scrollToModal();
    });
    
    const handleAddAccount = () => {
        //
    }

    const scrollToModal = () => {
        modalRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start", 
          inline: "nearest"
        });
      };
    return(
        <div className="addAcc_container drop_shadow">
            <div ref={modalRef} className="scroll_position_holder"></div>
            <h1>Tạo tài khoản</h1>
            <form onSubmit={(e) => {
                    e.preventDefault();
                    setAccInfo(
                        {
                            id: e.target.id.value, 
                            category:e.target.category.value,
                            imgUrl: e.target.image.value,
                            price: e.target.image.value
                        }
                    );
                }}>
                <div>
                    <label>ID:</label>
                    <input type="text" autoFocus={true} name="id"></input>
                </div>
                <div>
                    <label>Danh mục game:</label>
                    <input type="text" name="category"></input>
                </div>
                <div>
                    <label>File ảnh:</label>
                    <input type="text" name="image"></input>
                </div>
                <div>
                    <label>Gía:</label>
                    <input type="text" name="price"></input>
                </div>
                <div className="button_container">
                    <input type="submit" className="drop_shadow neon_effect" value="Tạo" onClick={handleAddAccount}></input>
                    <input type="button" className="drop_shadow neon_effect" value="Thoát" onClick={close}></input>
                </div>
            </form>
        </div>
    );
}
export default AddAccount;