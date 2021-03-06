import React, {useEffect, useRef, useState} from 'react';
import {useDispatch , useSelector} from 'react-redux';
import { getUser, createAccount, setNotification } from '../../../actions/user_actions';
import FileBase from 'react-file-base64';
import getRndInteger from '../../../utils/RandomGenerator';

import './UserInfo.css';

const UserInfo = () => {
    const dispatch = useDispatch();
    const [currentBase64, setCurrentBase64] = useState(null);
    const currentCategory = useSelector((state) => state.user_reducer.categoryList);
    const accountInputRef = 
    {
        ctgRef: useRef(null),
        priceRef: useRef(null),
        name: useRef(null),
        passWord: useRef(null),
        email: useRef(null),
        phoneNumber: useRef(null),
        attr1Ref: useRef(null),
        attr2Ref: useRef(null),
        attr3Ref: useRef(null),
        attr4Ref: useRef(null),
    };
    const currentLoginUser = useSelector((state) => state.user_reducer.login);
    const user = useSelector((state) => state.user_reducer.currentUser);
    
    useEffect(()=> {
        if (currentLoginUser) {
            dispatch(getUser(currentLoginUser.userName));
        }
    },[currentLoginUser]);

    const onAccUpload = () => {
        const toUploadAcc = 
        {
            id: getRndInteger(1,2000),  
            price: accountInputRef.priceRef.current.value || null,
            category: accountInputRef.ctgRef.current.value || null,
            name: accountInputRef.name.current.value || null,
            passWord: accountInputRef.passWord.current.value || null,
            email: accountInputRef.email.current.value || null,
            phoneNumber: accountInputRef.phoneNumber.current.value || null,
            imgUrl:  currentBase64 ? currentBase64 : null,
            accSeller:  user ? user.userName : null,
            attr1: accountInputRef.attr1Ref.current.value || null,
            attr2: accountInputRef.attr2Ref.current.value || null,
            attr3: accountInputRef.attr3Ref.current.value || null,
            attr4: accountInputRef.attr4Ref.current.value || null
        };
        dispatch(createAccount(toUploadAcc));
        
    }

    const refresh = () => {
        dispatch(getUser(currentLoginUser.userName))
        .then(() => dispatch(setNotification("T???i l???i user th??nh c??ng")));
    }

    return(
        <div className="user_info_container drop_shadow">
            <h2 className="icon"> {"<"} </h2>
            <h2 className="title"> Th??ng tin c???a { user ? user.userName : null} </h2>
            <div className="info_panel">
                <div> 
                    <button type="button" className="drop_shadow neon_effect" onClick={refresh}> T???i l???i </button>
                </div>
                
                {currentLoginUser && currentLoginUser.isAdmin === true ?
                <> 
                <div style={{color: "yellow"}}> T???ng thu nh???p c???a shop: { user ? user.balance : null} VND</div>
                <div> T??i kho???n ???? b??n ???????c: &nbsp; {user ? JSON.stringify(user.accountSellList, user.accountSellList,2) : null} </div> 
                </>
                : null}
                
                {currentLoginUser && currentLoginUser.isAdmin === false ?
                    <> 
                        <div> S??? ??i???n tho???i: { user ? user.phoneNumber : null}</div>
                        <div style={{color: "yellow"}}> Ti???n trong th???: { user ? user.balance : null} VND</div>
                        <div> S??? t??i kho???n ???? b??n ???????c: &nbsp; {user ? user.accountSellList.length : null} </div>
                        <div style={{backgroundColor: "black", paddingLeft: "15vh"}}> B??n t??i kho???n game </div>
                        <div> Game: &nbsp; 
                            <select ref={accountInputRef.ctgRef}>
                                { currentCategory != null 
                                ? currentCategory.map((ele, key) => (<option value={ele.name} key={key}>{ele.name}</option>))
                                : null
                                }
                            </select>
                        </div>
                        <div> Gi??: &nbsp;
                            <input ref={accountInputRef.priceRef} type="text"></input>
                        </div>
                        <div> T??n t??i kho???n: &nbsp;
                            <input ref={accountInputRef.name} type="text"></input>
                        </div>
                        <div> M???t kh???u: &nbsp;
                            <input ref={accountInputRef.passWord} type="password"></input>
                        </div>
                        <div> Email: &nbsp;
                            <input ref={accountInputRef.email} type="email"></input>
                        </div>
                        <div> S??? ??i???n tho???i: &nbsp;
                            <input ref={accountInputRef.phoneNumber} type="text"></input>
                        </div>
                        <div> T??n trong game:&nbsp;
                            <input ref={accountInputRef.attr1Ref} type="text"></input>
                        </div>
                        <div> Rank/Level:&nbsp;
                            <input ref={accountInputRef.attr2Ref} type="text"></input>
                        </div>
                        <div> C???p pet:&nbsp;
                            <input ref={accountInputRef.attr3Ref} type="text"></input>
                        </div>
                        <div> M?? t??? ph???:&nbsp;
                            <input ref={accountInputRef.attr4Ref} type="text"></input>
                        </div>
                        <div>
                            Upload h??nh ???nh:
                        </div>
                        <div>
                            <FileBase className="base64"  type="file" multiple={false} onDone = {({base64}) => {setCurrentBase64(base64)}}></FileBase>  
                        </div>
                        <div>
                            <img className="image" alt="Ch???n ???nh ????? upload" src={currentBase64}/>
                        </div>
                        <div> 
                            <button type="button" className="drop_shadow neon_effect" onClick={onAccUpload}> Upload </button>
                        </div>
                    </>
                    : null
                }
            </div>
        </div>
    );
}
export default UserInfo;