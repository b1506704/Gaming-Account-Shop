import {React, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import LoadingContainer from '../../../utils/LoadingContainer/LoadingContainer';
import {
  buyAccount, 
  filterAccount, 
  deleteAccount, 
  deleteCard, 
  deleteCategory, 
  setNotification,
  updateAccount,
  updateCategory
} from '../../../actions/user_actions';
import getRndInteger from '../../../utils/RandomGenerator';
import './Card.css';
import viettel from '../../../assets/imgs/viettel.png'; 
import mobifone from '../../../assets/imgs/mobi.png'
import vinaphone from '../../../assets/imgs/vina.png'
//id: id của tài khoản game 
//name: tên của danh mục game
//price: giá của tài khoản game
//type: kiểu của Card là tài khoản game hay danh mục game hay thẻ game
//mode: Card thuộc trang User hay trang Admin
//isBought: tình trạng đã bán hay chưa của tài khoản
//accNum: số tài khoản game hiện có
//sellNum: số tài khoản game đã bán
const Card = ({account, category, card, type, mode}) => {
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);
    const currentLoginUser = useSelector((state) => state.user_reducer.login);
    const url = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAABMCAYAAAB9Pk6+AAACJUlEQVR42u3YQQEAMAgAIU2+6K7GPSAGe3NvAAAAACBqBRYAAAAAZQILAAAAgDSBBQAAAECawAIAAAAgTWABAAAAkCawAAAAAEgTWAAAAACkCSwAAAAA0gQWAAAAAGkCCwAAAIA0gQUAAABAmsACAAAAIE1gAQAAAJAmsAAAAABIE1gAAAAApAksAAAAANIEFgAAAABpAgsAAACANIEFAAAAQJrAAgAAACBNYAEAAACQJrAAAAAASBNYAAAAAKQJLAAAAADSBBYAAAAAaQILAAAAgDSBBQAAAECawAIAAAAgTWABAAAAkCawAAAAAEgTWAAAAACkCSwAAAAA0gQWAAAAAGkCCwAAAIA0gQUAAABAmsACAAAAIE1gAQAAAJAmsAAAAABIE1gAAAAApAksAAAAANIEFgAAAABpAgsAAACANIEFAAAAQJrAAgAAACBNYAEAAACQJrAAAAAASBNYAAAAAKQJLAAAAADSBBYAAAAAaQILAAAAgDSBBQAAAECawAIAAAAgTWABAAAAkCawAAAAAEgTWAAAAACkCSwAAAAA0gQWAAAAAGkCCwAAAIA0gQUAAABAmsACAAAAIE1gAQAAAJAmsAAAAABIE1gAAAAApAksAAAAANIEFgAAAABpAgsAAACANIEFAAAAQJrAAgAAACBNYAEAAACQJrAAAAAASBNYAAAAAKQJLAAAAADSBBYAAAAAaQILAAAAgDSBBQAAAEDaBznpvWmqACQLAAAAAElFTkSuQmCC";
    const sampleAcc = {
      price: getRndInteger(50000, 2500000),
      category: '01',
      imgUrl: url,
      attr1: getRndInteger(1,100),
      attr2: getRndInteger(1,7),
      attr3: getRndInteger(1,100),
      attr4: getRndInteger(1,100)
    };
    const sampleCategory = {
      name: getRndInteger(1,100),
      imgUrl: url,
    };
    const onCardSelect = () => {
      if (type === "category") {
        dispatch(filterAccount(category.name));
      }
      if (type === "acc") {
        if (currentLoginUser === null || currentLoginUser === undefined) {
          dispatch(setNotification("Vui lòng đăng nhập!"));
        } else {
          dispatch(buyAccount(currentLoginUser.userName, account));
        } 
      }
    }
    const onCardEdit = () => {
      setIsEdit(true);
      if (type === "acc") {
        dispatch(updateAccount(account.id, sampleAcc));
      } else if(type === "category") {
        dispatch(updateCategory(category.name, sampleCategory));
      } else if(type === "card") {

      }
    }

    const onCardDelete = () => {
      if (type === "acc") {
        dispatch(deleteAccount(account.id));
      } else if (type === "card") {
        dispatch(deleteCard(card.id));
      } else if (type === "category") {
        dispatch(deleteCategory(category.name));
      }
    }
    return (
      <div className="card_detail drop_shadow">
        <div className="title_bar drop_shadow">
          { type === "acc" ? '#' + account.id : type === "category" ? '#' + category.name : type ==="card" ? '#' + card.id : null }            
        </div>
        { 
          type === "acc" 
          ? <div className="acc_info">
              <div> Game: {account.category}</div>
              <div> Giá: {account.price} VND </div>
              {
                mode === "edit"
                ? <div> 
                    <div>Tình trạng: {account.isBought ? "Đã bán" : "Chưa bán"}</div>
                    <div>Người mua: {account.accOwner}</div>
                  </div>
                : null
              }
              <div> Tên trong game: {account.attr1} </div>
              <div> Rank/Level: {account.attr2}</div>
              <div> Cấp pet: {account.attr3}</div>
              <div> Mô tả phụ: {account.attr4}</div>
              
            </div>
          : type === "category" 
            ? <div className="acc_info">
                <div> Số tài khoản hiện có: {category.accNum}</div>
                <div> Đã bán: {category.sellNum}</div>
              </div>
              : type === "card"
                ? <div className="acc_info">
                    <div> Nhà mạng: {card.carrier}</div>
                    <div> Giá trị: {card.value}</div>
                    <div> Tình trạng:  {card.isBought ? "Đã bán" : "Chưa bán" }</div>
                  </div>
                  : null   
        }
        {
          mode === "view"
          ?  <button type="button" className="card_button drop_shadow" onClick={onCardSelect}>
               {type === "acc" ? "Mua" : "Duyệt"}
            </button>
          : <>
              <button type="button" className="card_button edit_button drop_shadow" onClick={onCardEdit}>
                  Sửa          
              </button>
              <button type="button" className="card_button delete_button drop_shadow" onClick={onCardDelete}>
                  Xóa         
              </button>
            </>
        }
        <div className="image_container">
          { type === "acc" && account.imgUrl ? 
            (<img className="image" alt="Loading..." src={account.imgUrl}/>)
            : type === "category" && category.imgUrl ?
            (<img className="image" alt="Loading..." src={category.imgUrl}/>) 
          : type === "card" ?
            (<img className="image" alt="Loading..." src={viettel}/>)  
          : (<LoadingContainer style="spinner"/>)
          }
        </div>
      </div>
    );
};
export default Card;