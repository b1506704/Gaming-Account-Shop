import {
  LOGIN_USER,
  REGISTER_USER,
  ADD_CREDIT,
  BUY_ACCOUNT,
  FILTER_ACCOUNT,
  AUTH_USER,
  LOGOUT_USER,
  ADD_TO_CART_USER,
  GET_CART_ITEMS_USER,
  REMOVE_CART_ITEM_USER,
  ON_SUCCESS_BUY_USER,
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER:
        return { ...state, register: action.payload }
    case LOGIN_USER:
        return { ...state, login: action.payload }
    case BUY_ACCOUNT:
        return { ...state, account: action.payload }
    case ADD_CREDIT:
        return { ...state, credit: action.payload}
    case FILTER_ACCOUNT:
        return { ...state, filterCategory: action.payload}
    case LOGOUT_USER:
        return { ...state }
    case ADD_TO_CART_USER:
        return {
            ...state, userData: {
                ...state.userData,
                cart: action.payload
            }
        }
    case GET_CART_ITEMS_USER:
        return {...state, cartDetail: action.payload}
    case REMOVE_CART_ITEM_USER:
        return {
            ...state,
            cartDetail: action.payload.cartDetail,
            userData: {
                ...state.userData,
                cart: action.payload.cart
            }

        }
    case ON_SUCCESS_BUY_USER:
        return {
            ...state,
            userData: {
                ...state.userData,
                cart: action.payload.cart
            },
            cartDetail: action.payload.cartDetail
        }

    default:
        return state;
  }
};

