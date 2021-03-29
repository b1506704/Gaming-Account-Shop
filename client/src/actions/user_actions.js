import {
  LOGIN_USER,
  REGISTER_USER,
  ADD_CREDIT,
  BUY_ACCOUNT,
  FILTER_ACCOUNT,
  AUTH_USER,
  LOGOUT_USER,
  ON_SUCCESS_BUY_USER
} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const login = (userInfo) => async (dispatch) => {
  try {
    // const { data } = await api.createUser(userInfo);
    dispatch({ type: LOGIN_USER, payload: userInfo});
    
  } catch (error) {
    console.log(error.message);
  }
};
export const register = (userInfo) => async (dispatch) => {
  try {
    // gửi data lên server
    const { data } = await api.createUser(userInfo);
    dispatch({ type: REGISTER_USER, payload: data});
  } catch (error) {
    console.log(error.message);
  }
};
export const addCredit = (creditInfo) => async (dispatch) => {
  try {
    dispatch({ type: ADD_CREDIT, payload: creditInfo});
  } catch (error) {
    console.log(error.message);
  }
};
export const buyAccount = (accInfo) => async (dispatch) => {
  try {
    dispatch({ type: BUY_ACCOUNT, payload: accInfo});
  } catch (error) {
    console.log(error.message);
  }
};
export const filterAccount = (categoryName) => async (dispatch) => {
  try {
    dispatch({ type: FILTER_ACCOUNT, payload: categoryName});
  } catch (error) {
    console.log(error.message);
  }
};

