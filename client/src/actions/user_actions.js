import {
  LOGIN_USER,
  REGISTER_USER,
  ADD_CREDIT,
  FETCH_ACCOUNT,
  BUY_ACCOUNT,
  FILTER_ACCOUNT,
  CREATE_ACCOUNT,
  LOGOUT_USER,
  ON_SUCCESS_BUY_USER,
} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const login = (userInfo) => async (dispatch) => {
  try {
    const { data } = await api.login(userInfo);
    dispatch({ type: LOGIN_USER, payload: data});
    
  } catch (error) {
    console.log(error.message);
  }
};
export const logout = (userInfo) => async (dispatch) => {
  try {
    const { data } = await api.logout(userInfo);
    dispatch({ type: LOGOUT_USER, payload: data});
    
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
export const fetchAccount = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAccount();
    dispatch({ type: FETCH_ACCOUNT, payload: data});
  } catch (error) {
    console.log(error.message);
  }
};
export const createAccount = (accInfo) => async (dispatch) => {
  try {
    const { data } = await api.createAccount(accInfo);
    // dispatch({ type: CREATE_ACCOUNT, payload: data});
    dispatch({ type: CREATE_ACCOUNT, payload: data});
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

