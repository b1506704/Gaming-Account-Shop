import { React, useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import {register} from '../../actions/user_actions';
import './RegisterPage.css';

const RegisterPage = ({close}) => {
    const dispatch = useDispatch();
    const [userInfo, setUserInfo] = useState({
        userName: '',
        passWord: '',
        phoneNumber: 0
    });
    const modalRef = useRef();

    useEffect(() => {
        if (userInfo.userName && userInfo.passWord) {
            dispatch(register(userInfo));
        }
    },[userInfo, setUserInfo]);

    useEffect(() => {
        scrollToModal();
    });
    const handleRegister = () => {
        // console.log(`${userInfo.userName} ${userInfo.passWord}`);
    }

    const scrollToModal = () => {
        modalRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start", 
          inline: "nearest"
        });
      };
    return(
        <div className="register_container drop_shadow">
            <div ref={modalRef} className="scroll_position_holder"></div>
            <h1>Đăng ký</h1>
            <form onSubmit={(e) => {
                    e.preventDefault();
                    setUserInfo({userName: e.target.username.value, passWord:e.target.password.value, phoneNumber: e.target.phone.value});
                }}>
                <div>
                    <label>Tên đăng ký:</label>
                    <input type="text" autoFocus={true} name="username"></input>
                </div>
                <div>
                    <label>Mật khẩu </label>
                     <input type="password" name="password" placeholder="<=12 ký tự"></input>
                </div>
                <div>
                    <label>Số điện thoại:</label>
                    <input type="tel" name="phone"></input>
                </div>
                <div className="button_container">
                    <input type="submit" className="drop_shadow neon_effect" value="Đăng ký" onClick={handleRegister}></input>
                    <input type="button" className="drop_shadow neon_effect" value="Thoát" onClick={close}></input>
                </div>
            </form>
        </div>
    );
}
export default RegisterPage;