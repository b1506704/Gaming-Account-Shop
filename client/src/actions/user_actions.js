import {
  LOGIN_USER,
  GET_USER,
  REGISTER_USER,
  ADD_CREDIT,
  FETCH_ACCOUNT,
  DELETE_ACCOUNT,
  BUY_ACCOUNT,
  FILTER_ACCOUNT,
  CREATE_ACCOUNT,
  LOGOUT_USER,
  FETCH_CARD,
  DELETE_CARD,
  CREATE_CARD,
  FETCH_CATEGORY,
  DELETE_CATEGORY,
  CREATE_CATEGORY
} from '../constants/actionTypes';

import * as api from '../api/index.js';

//???
export const getUser = (userInfo) => async (dispatch) => {
  try {
    const { data } = await api.getUser(userInfo);
    dispatch({ type: GET_USER, payload: data});
  } catch (error) {
    console.log(error.message);
  }
};

export const login = (userInfo) => async (dispatch) => {
  try {
    const { data } = await api.login(userInfo);
    dispatch({ type: LOGIN_USER, payload: data});
    // await dispatch(getUser(data));
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
export const addCredit = (userName, creditInfo) => async (dispatch) => {
  try {
    const { data } = await api.addCredit(userName, creditInfo);
    dispatch({ type: ADD_CREDIT, payload: data});
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
export const deleteAccount = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteAccount(id);
    await dispatch({ type: DELETE_ACCOUNT, payload: data});
    await dispatch(fetchAccount());
    
  } catch (error) {
    console.log(error.message);
  }
};
export const createAccount = (accInfo) => async (dispatch) => {
  try {
    const { data } = await api.createAccount(accInfo);
    await dispatch({ type: CREATE_ACCOUNT, payload: data});
    await dispatch(fetchAccount());
  } catch (error) {
    console.log(error.message);
  }
};
export const fetchCard = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCard();
    dispatch({ type: FETCH_CARD, payload: data});
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteCard = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteCard(id);
    await dispatch({ type: DELETE_CARD, payload: data});
    await dispatch(fetchCard());
  } catch (error) {
    console.log(error.message);
  }
};
export const createCard = (cardInfo) => async (dispatch) => {
  try {
    const { data } = await api.createCard(cardInfo);
    await dispatch({ type: CREATE_CARD, payload: data});
    await dispatch(fetchCard());
  } catch (error) {
    console.log(error.message);
  }
};
//category action
export const fetchCategory = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCategory();
    dispatch({ type: FETCH_CATEGORY, payload: data});
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteCategory = (name) => async (dispatch) => {
  try {
    const { data } = await api.deleteCategory(name);
    await dispatch({ type: DELETE_CATEGORY, payload: data});
    await dispatch(fetchCategory());
  } catch (error) {
    console.log(error.message);
  }
};
export const createCategory = (categoryInfo) => async (dispatch) => {
  try {
    const { data } = await api.createCategory(categoryInfo);
    await dispatch({ type: CREATE_CATEGORY, payload: data});
    await dispatch(fetchCategory());
  } catch (error) {
    console.log(error.message);
  }
};
export const buyAccount = (accInfo) => async (dispatch) => {
  try {
    //
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

