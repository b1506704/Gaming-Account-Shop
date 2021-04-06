import {React, useRef, useState} from 'react';
import FileBase from 'react-file-base64';
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
  updateCategory,
  updateCard,
  getUser
} from '../../../actions/user_actions';
import './Card.css';
import viettel from '../../../assets/imgs/viettel.png'; 
import mobifone from '../../../assets/imgs/mobi.png'
import vinaphone from '../../../assets/imgs/vina.png'
import dota2  from '../../../assets/imgs/dota2.jpg';
import lmht from '../../../assets/imgs/lmht.jpg'
import lienquan from '../../../assets/imgs/lienquan.jpg';
import freefire from '../../../assets/imgs/freefire.jpg';
//id: id của tài khoản game 
//name: tên của danh mục game
//price: giá của tài khoản game
//type: kiểu của Card là tài khoản game hay danh mục game hay thẻ game
//mode: Card thuộc trang User hay trang Admin
//isBought: tình trạng đã bán hay chưa của tài khoản
//accNum: số tài khoản game hiện có
//sellNum: số tài khoản game đã bán
const Card = ({account, category, card, type, mode}) => {
    const accountInputRef = 
      {
        ctgRef: useRef(null),
        priceRef: useRef(null),
        attr1Ref: useRef(null),
        attr2Ref: useRef(null),
        attr3Ref: useRef(null),
        attr4Ref: useRef(null),
      };
    const categoryInputRef = 
    {
      nameRef: useRef(null),
    };
    const cardInputRef = 
    {
      carrierRef: useRef(null),
      valueRef: useRef(null),
    };
    
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);
    const [currentBase64, setCurrentBase64] = useState(null);
    const currentLoginUser = useSelector((state) => state.user_reducer.login);
    const currentCategory = useSelector((state) => state.user_reducer.categoryList);
    const currentAccount = useSelector((state) => state.user_reducer.accountList);
    const carrierList = ['Viettel', 'Mobifone', 'Vinaphone'];   
    const cardValueList = [20000, 50000, 100000, 200000, 500000, 1000000];   
    
    const countCtgByName = (name) => {
      if (currentAccount) {
        let count = 0;
        for (let i = 0; i < currentAccount.length; i++) {
          if (currentAccount[i].category === name) {
            count++;
          }
        }
        return count;
      }
    }

    const countCtgBySell = (name) => {
      let count = 0;
      if (currentAccount) {
        for (let i = 0; i < currentAccount.length; i++) {
          if (currentAccount[i].category === name && currentAccount[i].isBought === true) {
            count++;
          }
        }
        return count;
      }
    }

    const onCardSelect = () => {
      if (type === "category") {
        dispatch(filterAccount(category.name));
      }
      if (type === "acc") {
        if (currentLoginUser === null || currentLoginUser === undefined) {
          dispatch(setNotification("Vui lòng đăng nhập!"));
        } else {
          dispatch(buyAccount(currentLoginUser.userName, account))
          .then(() => dispatch(getUser(currentLoginUser.userName)));
        } 
      }
    }
    const onCardEdit = () => {
      setIsEdit(true);
    }
    const onCardUpdate = () => {
      if (type === "acc") {
        const toUpdateAcc = {
          price: accountInputRef.priceRef.current.value || account.price,
          category: accountInputRef.ctgRef.current.value || account.category,
          imgUrl:  currentBase64 ? currentBase64 : account.imgUrl,
          attr1: accountInputRef.attr1Ref.current.value || account.attr1,
          attr2: accountInputRef.attr2Ref.current.value || account.attr2,
          attr3: accountInputRef.attr3Ref.current.value || account.attr3,
          attr4: accountInputRef.attr4Ref.current.value || account.attr4
        };
          dispatch(updateAccount(account.id, toUpdateAcc))
          .then(() => setIsEdit(false));
      } else if (type === "category") {
          const toUpdateCategory = {
            name: categoryInputRef.nameRef.current.value || category.name,
            imgUrl: currentBase64 ? currentBase64 : category.imgUrl,
          };
          dispatch(updateCategory(category.name, toUpdateCategory))
          .then(() => setIsEdit(false));
      } else if (type === "card") {
          const toUpdateCard = {
            carrier: cardInputRef.carrierRef.current.value,
            value: cardInputRef.valueRef.current.value,
          };
          dispatch(updateCard(card.id, toUpdateCard))
          .then(() => setIsEdit(false));
      }
    }
    const onCardCancel = () => {
      setIsEdit(false);
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
              <div> Game: &nbsp; 
                { isEdit === false ? account.category
                  : (<select ref={accountInputRef.ctgRef}>
                      { currentCategory != null 
                        ? currentCategory.map((ele, key) => (<option value={ele.name} key={key}>{ele.name}</option>))
                        : null
                      }
                    </select>)
                }
              </div>
              <div> Giá: &nbsp;
                { isEdit === false ? account.price + " VND"
                  : (<input ref={accountInputRef.priceRef} type="text" placeholder={account.price}></input>)
                }
              </div>
              <div style={{color: "black"}}>Tình trạng: &nbsp;{account.isBought ? "Đã bán" : "Chưa bán"}</div>
              <div style={{color: "black"}}>Người mua:&nbsp; {account.accOwner}</div>
              <div> Tên trong game:&nbsp;
              { isEdit === false ? account.attr1
                : (<input ref={accountInputRef.attr1Ref} type="text" placeholder={account.attr1}></input>)
              }
              </div>
              <div> Rank/Level:&nbsp;
              { isEdit === false ? account.attr2
                : (<input ref={accountInputRef.attr2Ref} type="text" placeholder={account.attr2}></input>)
              }
              </div>
              <div> Cấp pet:&nbsp;
              { isEdit === false ? account.attr3
                : (<input ref={accountInputRef.attr3Ref} type="text" placeholder={account.attr3}></input>)
              }
              </div>
              <div> Mô tả phụ:&nbsp;
              { isEdit === false ? account.attr4
                : (<input ref={accountInputRef.attr4Ref} type="text" placeholder={account.attr4}></input>)
              }
              </div>
              
            </div>
          : type === "category" 
            ? <div className="acc_info">
                <div> Tên game:
                  { isEdit === false ? category.name
                  : (<input ref={categoryInputRef.nameRef} type="text" placeholder={category.name}></input>)
                  }
                </div>
                <div style={{color: "black"}}> Số tài khoản hiện có:&nbsp; {countCtgByName(category.name) || null}</div>
                <div style={{color: "black"}}> Đã bán:&nbsp; {countCtgBySell(category.name) || null}</div>
              </div>
              : type === "card"
                ? <div className="acc_info">
                    <div> Nhà mạng:&nbsp;
                        { isEdit === false ? card.carrier
                          : (<select ref={cardInputRef.carrierRef}>
                              { carrierList != null 
                                ? carrierList.map((ele, key) => (<option value={ele} key={key}>{ele}</option>))
                                : null
                              }
                            </select>)
                        }
                    </div>
                    <div> Giá trị: &nbsp;
                        { isEdit === false ? card.value
                          : (<select ref={cardInputRef.valueRef}>
                              { cardValueList != null 
                                ? cardValueList.map((ele, key) => (<option value={ele} key={key}>{ele}</option>))
                                : null
                              }
                            </select>)
                        }
                    </div>
                    <div style={{color: "black"}}> Tình trạng:&nbsp;  {card.isBought ? "Đã bán" : "Chưa bán" }</div>
                  </div>
                  : null   
        }
        {
          mode === "view"
          ?  <button type="button" className="card_button drop_shadow" onClick={onCardSelect}>
               {type === "acc" ? "Mua" : "Duyệt"}
            </button>
          : <>
              { isEdit === false 
                ? (<button type="button" className="card_button edit_button drop_shadow" onClick={onCardEdit}>
                    Sửa
                  </button>) 
                : <>
                  { type === "card" ? null : (<div className="card_button base64_button drop_shadow">
                    Upload hình ảnh:
                    <FileBase className="base64"  type="file" multiple={false} onDone = {({base64}) => {setCurrentBase64(base64)}}></FileBase>  
                  </div>)}
                  <button type="button" className="card_button cancel_button drop_shadow" onClick={onCardCancel}>
                    Hủy
                  </button>
                  <button type="button" className="card_button edit_button drop_shadow" onClick={onCardUpdate}>
                    Lưu
                  </button>
                  </>
              }
              <button type="button" className="card_button delete_button drop_shadow" onClick={onCardDelete}>
                  (X)         
              </button>
            </>
        }
        <div className="image_container">
          { type === "acc" && (account.imgUrl || currentBase64) ? 
            (<img className="image" alt="Loading..." src={currentBase64 || account.imgUrl}/>)
            : type === "category" && (category.imgUrl || currentBase64 ) ?
            (<img className="image" 
              alt="Loading..." 
              src={
                category.name === "Liên minh huyền thoại" 
              ? lmht
              : category.name === "Dota2"
              ? dota2
              : category.name === "Liên Quân"
              ? lienquan
              : category.name === "FreeFire"
              ? freefire
              : currentBase64 || category.imgUrl
            }/>)   
          : type === "card" ?
            (<img className="image" 
              alt="Loading..." 
              src={
                card.carrier === "Viettel" 
              ? viettel
              : card.carrier === "Mobifone"
              ? mobifone
              : card.carrier === "Vinaphone"
              ? vinaphone
              : null
            }/>)  
          : (<LoadingContainer style="spinner"/>)
          }
        </div>
      </div>
    );
};
export default Card;