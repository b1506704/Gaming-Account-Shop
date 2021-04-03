import { React, useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import {login} from '../../actions/user_actions';
import './LoginPage.css';

const LoginPage = ({close}) => {
    const dispatch = useDispatch();
    const [userInfo, setUserInfo] = useState({
        userName: '',
        passWord: ''
    });
    const modalRef = useRef();

    useEffect(() => {
        if (userInfo.userName && userInfo.passWord) {
            dispatch(login(userInfo));
        }
    },[userInfo, setUserInfo]);

    useEffect(() => {
        scrollToModal();
    });
    
    const handleLogin = () => {
        // dispatch(login(userInfo));
    }

    const scrollToModal = () => {
        modalRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start", 
          inline: "nearest"
        });
      };
    return(
        <div className="login_container drop_shadow">
            <div ref={modalRef} className="scroll_position_holder"></div>
            <h1>Đăng nhập</h1>
            <form onSubmit={(e) => {
                    e.preventDefault();
                    setUserInfo({userName: e.target.username.value, passWord:e.target.password.value});
                }}>
                <div>
                    <label>Tên đăng nhập:</label>
                    <input type="text" autoFocus={true} name="username"></input>
                </div>
                <div>
                    <label>Mật khẩu:</label>
                    <input type="password" name="password"></input>
                </div>
                <div className="button_container">
                    <input type="submit" className="drop_shadow neon_effect" value="Đăng nhập" onClick={handleLogin}></input>
                    <input type="button" className="drop_shadow neon_effect" value="Thoát" onClick={close}></input>
                </div>
            </form>
        </div>
    );
}
export default LoginPage;