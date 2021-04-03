import {
  LOGIN_USER,
  REGISTER_USER,
  GET_USER,
  ADD_CREDIT,
  FETCH_ACCOUNT,
  DELETE_ACCOUNT,
  CREATE_ACCOUNT,
  BUY_ACCOUNT,
  LOGOUT_USER,
  FILTER_ACCOUNT,
  CREATE_CARD,
  FETCH_CARD,
  DELETE_CARD,
  CREATE_CATEGORY,
  FETCH_CATEGORY,
  DELETE_CATEGORY,
  SET_NOTIFICATION
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER:
        return { ...state, register: action.payload }
    case LOGIN_USER:
        return { ...state, login: action.payload }
    case GET_USER:
        return { ...state, user: action.payload }
    case LOGOUT_USER:
        return { ...state, login: action.payload}  
    case FETCH_ACCOUNT:
        return { ...state, accountList: action.payload }
    case DELETE_ACCOUNT:
        return {...state, 
            accountList: state.accountList.filter((account) => account.id != action.payload )
        }
    case CREATE_ACCOUNT:
        return {...state, 
                    accountList:[...state.accountList, action.payload]
                }
    case BUY_ACCOUNT:
        return { ...state, account: action.payload }
    case FETCH_CARD:
        return { ...state, cardList: action.payload}
    case DELETE_CARD:
        return { ...state, deleteCard: action.payload }
    case CREATE_CARD:
        return { ...state, createdCard: action.payload }        
    case FETCH_CATEGORY:
        return { ...state, categoryList: action.payload}
    case DELETE_CATEGORY:
        return { ...state, deleteCategory: action.payload }
    case CREATE_CATEGORY:
        return { ...state, createdCategory: action.payload }        
    case ADD_CREDIT:
        return { ...state, credit: action.payload}
    case FILTER_ACCOUNT:
        return { ...state, filterCategory: action.payload}
    case SET_NOTIFICATION:
        return { ...state, notif: action.payload}
    default:
        return state;
  }
};

