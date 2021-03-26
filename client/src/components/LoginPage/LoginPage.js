import { React, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {login} from '../../actions/user_actions';
import './LoginPage.css';

const LoginPage = ({close}) => {
    const dispatch = useDispatch();
    const [userInfo, setUserInfo] = useState({
        userName: '',
        passWord: ''
    });

    useEffect(() => {
        dispatch(login(userInfo.userName, userInfo.passWord));
    },[userInfo, setUserInfo]);

    const handleLogin = () => {
        console.log(`${userInfo.userName} ${userInfo.passWord}`);
    }
    return(
        <div className="login_container drop_shadow">
            <h1>Đăng nhập</h1>
            <form onSubmit={(e) => {
                    e.preventDefault();
                    setUserInfo({userName: e.target.username.value, passWord:e.target.password.value});
                }}>
                <div>
                    <label>Tên đăng nhập:</label>
                    <input type="text" name="username" 
                    onSubmit= {(e) => {
                        setUserInfo({...userInfo, userName: e.target.value});}
                    }>
                    </input>
                </div>
                <div>
                    <label>Mật khẩu:</label>
                    <input type="password" name="password" 
                    onSubmit= {(e) => {
                        setUserInfo({...userInfo, passWord: e.target.value});
                    }}>
                    </input>
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