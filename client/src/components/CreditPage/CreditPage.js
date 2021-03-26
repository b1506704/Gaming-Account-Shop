import { React, useState } from 'react';
import { useDispatch } from 'react-redux';

import './CreditPage.css';

const CreditPage = ({close}) => {
    const [userInfo, setUserInfo] = useState({
        userName: '',
        passWord: ''
    });
    const dispatch = useDispatch();

    return(
        <div className="credit_container drop_shadow">
            <h1>Nạp thẻ</h1>
            <form onSubmit={(e) => {
                    e.preventDefault();
                    setUserInfo({userName: e.target.username.value, passWord:e.target.password.value});
                }}>
                <div>
                    <label>Mã thẻ:</label>
                    <input type="text" name="username" 
                    onSubmit= {(e) => {
                        setUserInfo({...userInfo, userName: e.target.value});}
                    }>
                    </input>
                </div>
                <div>
                    <label>Loại thẻ:</label>
                    <input type="password" name="password" 
                    onSubmit= {(e) => {
                        setUserInfo({...userInfo, passWord: e.target.value});
                    }}>
                    </input>
                </div>
                <div className="button_container">
                    <input type="submit" className="drop_shadow neon_effect" value="Nạp tiền" onClick={console.log(`${userInfo.userName} ${userInfo.passWord}`)}></input>
                    <input type="button" className="drop_shadow neon_effect" value="Thoát" onClick={close}></input>
                </div>
            </form>
        </div>
    );
}
export default CreditPage;