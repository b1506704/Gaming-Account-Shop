import { React, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import Modal from '../Modal/Modal';
import LoginPage from '../LoginPage/LoginPage';
import CreditPage from '../CreditPage/CreditPage';
import {login} from '../../actions/user_actions';
import './NavBar.css';

const NavBar = () => {
    const dispatch = useDispatch();
    const modal = useRef(null);
    const [isLoginPageOpen, setIsLoginPageOpen] = useState(false);
    const [isCreditPageOpen, setIsCreditPageOpen] = useState(false);
    

    return(
        <header>
            <div className="content-wrapper">
                <h1>Gaming Account Shop</h1>
                <nav>
                    <a onClick={() => {
                        modal.current.close();
                        dispatch(login('', ''));
                    }}>Trang chủ</a>
                    <a onClick={() => {
                        setIsCreditPageOpen(true);
                        setIsLoginPageOpen(false);
                        modal.current.open();
                    }}>Nạp thẻ</a>
                    <a onClick={() => {
                        setIsCreditPageOpen(false);
                        setIsLoginPageOpen(true);
                        modal.current.open();
                    }}>Đăng nhập</a>
                </nav>
            </div>
            <Modal ref={modal}>
                { isLoginPageOpen ? (<LoginPage close={() => modal.current.close()}/>) : null}
                { isCreditPageOpen ? (<CreditPage close={() => modal.current.close()}/>) : null}
            </Modal>
        </header>
    );
}
export default NavBar;