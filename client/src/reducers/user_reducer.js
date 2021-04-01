import {
  LOGIN_USER,
  REGISTER_USER,
  ADD_CREDIT,
  FETCH_ACCOUNT,
  CREATE_ACCOUNT,
  BUY_ACCOUNT,
  LOGOUT_USER,
  FILTER_ACCOUNT,
  ON_SUCCESS_BUY_USER,
  CREATE_CARD,
  FETCH_CARD
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER:
        return { ...state, register: action.payload }
    case LOGIN_USER:
        return { ...state, login: action.payload }
    case FETCH_ACCOUNT:
        return { ...state, accountList: action.payload }
    case FETCH_CARD:
        return { ...state, cardList: action.payload}
    case CREATE_ACCOUNT:
        return { ...state, createdAcc: action.payload }
    case CREATE_CARD:
        return { ...state, createdCard: action.payload }        
    case BUY_ACCOUNT:
        return { ...state, account: action.payload }
    case ADD_CREDIT:
        return { ...state, credit: action.payload}
    case FILTER_ACCOUNT:
        return { ...state, filterCategory: action.payload}
    case ON_SUCCESS_BUY_USER:
        return { ...state, credit: action.payload}
    case LOGOUT_USER:
        return { ...state, isPreUserLogout: action.payload}  
    default:
        return state;
  }
};

