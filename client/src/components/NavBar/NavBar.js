import { React, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '../Modal/Modal';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import CreditPage from '../CreditPage/CreditPage';
import {logout, login} from '../../actions/user_actions';
import './NavBar.css';

const NavBar = ({userMode, userName, balance}) => {
    const dispatch = useDispatch();
    const modal = useRef(null);
    const [isLoginPageOpen, setIsLoginPageOpen] = useState(false);
    const [isCreditPageOpen, setIsCreditPageOpen] = useState(false);
    const [isRegisterPageOpen, setIsRegisterPageOpen] = useState(false);
    const currentUserInfo = useSelector ((state) => state.user_reducer.login);
    return(
        <header>
            <div className="content-wrapper">
                <h1>Gaming Account Shop</h1>
                <nav>
                    {
                        userMode === "admin" || userMode === "user" 
                        ? null 
                        : <a onClick={() => {
                            modal.current.close();
                        }}>
                            Trang chủ</a>
                    }
                    {
                        userMode != "user" 
                        ? null 
                        : <a onClick={() => {
                            setIsCreditPageOpen(true);
                            setIsRegisterPageOpen(false);
                            setIsLoginPageOpen(false);
                            modal.current.open();
                        }}>
                            Nạp thẻ</a>
                    }
                    {
                        userMode === "user" 
                        ? <a style={{color: "yellow"}}> | {userName} | Số dư: {balance} VND |</a>
                        : null
                    }
                    {
                        userMode === "admin" 
                        ? <a style={{color: "yellow"}}> | {userName} |</a>
                        : null
                    }
                    {
                        userMode != "admin" && userMode != "user"
                        ? <a onClick={() => {
                            setIsRegisterPageOpen(true);
                            setIsCreditPageOpen(false);
                            setIsLoginPageOpen(false);
                            modal.current.open();
                        }}>
                            Đăng ký</a>
                        : null 
                    }
                    {
                        userMode === "admin" || userMode === "user" 
                        ? <a onClick={() => {
                            
                            dispatch(logout(currentUserInfo));
                            dispatch(login(null));
                            modal.current.close();
                            }}>
                            Đăng xuất</a> 
                        : <a onClick={() => {
                            setIsLoginPageOpen(true);
                            setIsCreditPageOpen(false);
                            setIsRegisterPageOpen(false);
                            modal.current.open();
                        }}>
                            Đăng nhập</a> 
                    }
                </nav>
            </div>
            <Modal ref={modal}>
                { isLoginPageOpen ? (<LoginPage close={() => modal.current.close()}/>) : null}
                { isCreditPageOpen ? (<CreditPage close={() => modal.current.close()}/>) : null}
                { isRegisterPageOpen ? (<RegisterPage close={() => modal.current.close()}/>) : null}
            </Modal>
        </header>
    );
}
export default NavBar;