import {
  LOGIN_USER,
  REGISTER_USER,
  ADD_CREDIT,
  BUY_ACCOUNT,
  FILTER_ACCOUNT,
  GET_CART_ITEMS_USER,
  ADD_TO_CART_USER,
  REMOVE_CART_ITEM_USER,
  AUTH_USER,
  LOGOUT_USER,
  ON_SUCCESS_BUY_USER
} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const uploadLp = (currentImage) => async (dispatch) => {
  try {
    dispatch({ type: UPLOAD, payload: currentImage});
    // send data to backend
    const { data } = await api.uploadLp(currentImage.base64);
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
export const login = (userInfo) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_USER, payload: userInfo});
    // send data to backend
  } catch (error) {
    console.log(error.message);
  }
};
export const register = (userInfo) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER, payload: userInfo});
    // send data to backend
  } catch (error) {
    console.log(error.message);
  }
};
export const addCredit = (creditInfo) => async (dispatch) => {
  try {
    dispatch({ type: ADD_CREDIT, payload: creditInfo});
    // send data to backend
  } catch (error) {
    console.log(error.message);
  }
};
export const buyAccount = (accInfo) => async (dispatch) => {
  try {
    dispatch({ type: BUY_ACCOUNT, payload: accInfo});
    // send data to backend
  } catch (error) {
    console.log(error.message);
  }
};
export const filterAccount = (categoryName) => async (dispatch) => {
  try {
    dispatch({ type: FILTER_ACCOUNT, payload: categoryName});
    // send data to backend
  } catch (error) {
    console.log(error.message);
  }
};

