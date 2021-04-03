import { React, useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {addCredit, setNotification} from '../../actions/user_actions';
import './CreditPage.css';

const CreditPage = ({close}) => {
    const dispatch = useDispatch();
    const modalRef = useRef();
    const [creditInfo, setCreditInfo] = useState({
        id: '',
        carrier: '',
        value: 0
    });
    const currentUserName = useSelector((state) => state.user_reducer.login.userName);
    
    useEffect(() => {
        scrollToModal();
    },[close]);
    
    const scrollToModal = () => {
        modalRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start", 
          inline: "nearest"
        });
      };
    const creName = ["Viettel","Mobifone","Vinaphone"];
    const creValue = [20000, 50000, 100000, 200000, 500000, 1000000];
    const [selectedCreName, setSelectedCreName] = useState(creName[0]);
    const [selectedCreValue, setSelectedCreValue] = useState(creValue[0]);

    const onCreNameChange = (e) => {
        const value = e.target.value;
        setSelectedCreName(creName.find((e) => e === value));
    }
    const onCreValueChange = (e) => {
        const value = parseInt(e.target.value);
        setSelectedCreValue(creValue.find((e) => e === value));
    }

    useEffect(() => {
        if (creditInfo.id != '') {
            dispatch(addCredit(currentUserName, creditInfo));
        }
    },[creditInfo]);

    

    const handleAddCredit = () => {
        //
    }
    return(
        <div className="credit_container drop_shadow">
            <div ref={modalRef} className="scroll_position_holder"></div>
            <h1>Nạp thẻ</h1>
            <form onSubmit={(e) => {
                    e.preventDefault();
                    setCreditInfo({id: e.target.ma_the.value, carrier: selectedCreName, value: selectedCreValue});
                }}>
                <div>
                    <label>Mã thẻ:</label>
                    <input type="text" autoFocus={true} name="ma_the"></input>
                </div>
                <div>
                    <label>Loại thẻ:</label>
                    <select value={selectedCreName} onChange={onCreNameChange}>
                        {creName.map((item, key) => (
                            <option value={item} key={key}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Mệnh giá:</label>
                    <select value={selectedCreValue} onChange={onCreValueChange}>
                        {creValue.map((item, key) => (
                            <option value={item} key={key}>
                                {item} VND
                            </option>
                        ))}
                    </select>
                </div>
                <div className="button_container">
                    <input type="submit" className="drop_shadow neon_effect" value="Nạp tiền" onClick={handleAddCredit}></input>
                    <input type="button" className="drop_shadow neon_effect" value="Thoát" onClick={close}></input>
                </div>
            </form>
            
        </div>
    );
}
export default CreditPage;