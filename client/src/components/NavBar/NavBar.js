import { React, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '../Modal/Modal';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import CreditPage from '../CreditPage/CreditPage';
import InventoryPage from '../InventoryPage/InventoryPage';
import Notification from './Notification/Notification';
import GoogleMap from './GoogleMap/GoogleMap';
import UserInfo from '../UserPage/UserInfo/UserInfo';
import {logout, setNotification} from '../../actions/user_actions';
import './NavBar.css';

const NavBar = ({userMode, userName}) => {
    const dispatch = useDispatch();
    const modal = useRef(null);
    const [isLoginPageOpen, setIsLoginPageOpen] = useState(false);
    const [isInventoryPageOpen, setIsInventoryPageOpen] = useState(false);
    const [isCreditPageOpen, setIsCreditPageOpen] = useState(false);
    const [isRegisterPageOpen, setIsRegisterPageOpen] = useState(false);
    const currentUserInfo = useSelector ((state) => state.user_reducer.login);
    const currentNotif = useSelector((state) => state.user_reducer.notif);
    return(
        <header>
            <div className="content-wrapper">
                <h1>Gaming Account Shop {userMode === "admin" ? "Management" : null}</h1>
                <nav>
                    {
                        userMode === "admin" || userMode === "user" 
                        ? null 
                        : <a onClick={() => {
                            modal.current.close();
                        }}>
                            Trang Chủ</a>
                    }
                    {
                        userMode != "user" 
                        ? null 
                        : <>
                            <a onClick={() => {
                                    setIsInventoryPageOpen(true);
                                    setIsCreditPageOpen(false);
                                    setIsRegisterPageOpen(false);
                                    setIsLoginPageOpen(false);
                                    modal.current.open();
                                }}>
                               Tài khoản</a>
                            <a onClick={() => {
                                setIsCreditPageOpen(true);
                                setIsRegisterPageOpen(false);
                                setIsLoginPageOpen(false);
                                setIsInventoryPageOpen(false);
                                modal.current.open();
                            }}>
                                Nạp Thẻ</a>
                        </>
                    }
                    {
                        userMode === "user" 
                        ? <a style={{color: "yellow"}}> | {userName} |</a>
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
                            setIsInventoryPageOpen(false);
                            modal.current.open();
                        }}>
                            Đăng Ký</a>
                        : null 
                    }
                    {
                        userMode === "admin" || userMode === "user" 
                        ? <a onClick={() => {
                            
                            dispatch(logout(currentUserInfo))
                            .then(() => dispatch(setNotification("Đăng xuất thành công")));
                            modal.current.close();
                            }}>
                            Đăng Xuất</a> 
                        : <a onClick={() => {
                            setIsLoginPageOpen(true);
                            setIsCreditPageOpen(false);
                            setIsRegisterPageOpen(false);
                            setIsInventoryPageOpen(false);
                            modal.current.open();
                        }}>
                            Đăng Nhập</a> 
                    }
                </nav>
            </div>
            <Modal ref={modal}>
                { isLoginPageOpen ? (<LoginPage close={() => modal.current.close()}/>) : null}
                { isCreditPageOpen ? (<CreditPage close={() => modal.current.close()}/>) : null}
                { isRegisterPageOpen ? (<RegisterPage close={() => modal.current.close()}/>) : null}
                { isInventoryPageOpen ? (<InventoryPage close={() => modal.current.close()}/>) : null}
            </Modal>
            {currentNotif ? <Notification message={currentNotif}/> : null}
            { userMode === "admin" ? null :<GoogleMap/>}
            { userMode ? <UserInfo user={currentUserInfo}/> : null}
        </header>
    );
}
export default NavBar;
