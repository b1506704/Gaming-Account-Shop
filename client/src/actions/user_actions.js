import {
  LOGIN_USER,
  GET_USER,
  REGISTER_USER,
  ADD_CREDIT,
  FETCH_ACCOUNT,
  DELETE_ACCOUNT,
  BUY_ACCOUNT,
  FILTER_ACCOUNT,
  FILTER_ACCOUNT_BY_RANK,
  CREATE_ACCOUNT,
  UPDATE_ACCOUNT,
  LOGOUT_USER,
  FETCH_CARD,
  DELETE_CARD,
  CREATE_CARD,
  UPDATE_CARD,
  FETCH_CATEGORY,
  DELETE_CATEGORY,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
  SET_NOTIFICATION,
} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const login = (userInfo) => async (dispatch) => {
  try {
    const { data } = await api.login(userInfo);
    await dispatch({ type: LOGIN_USER, payload: data});
    await dispatch(setNotification("Đăng nhập thành công"));
  } catch (error) {
    dispatch(setNotification("Đăng nhập thất bại"));
  }
};

export const getUser = (userName) => async (dispatch) => {
  try {
    const { data } = await api.getUser(userName);
    dispatch({ type: GET_USER, payload: data});
  } catch (error) {
    console.log(error.message);
    // dispatch(setNotification("Đăng nhập thất bại"));
  }
};

export const logout = (userInfo) => async (dispatch) => {
  try {
    const { data } = await api.logout(userInfo);
    await dispatch({ type: LOGOUT_USER, payload: data});
    await dispatch({ type: ADD_CREDIT, payload: null});
  } catch (error) {
    console.log(error.message);
  }
};

export const register = (userInfo) => async (dispatch) => {
  try {
    const { data } = await api.createUser(userInfo);
    await dispatch({ type: REGISTER_USER, payload: data});
    await dispatch(setNotification(`Đăng ký thành công`));
  } catch (error) {
    dispatch(setNotification("Đăng ký thất bại"));
  }
};

export const addCredit = (userName, creditInfo) => async (dispatch) => {
  try {
    const { data } = await api.addCredit(userName, creditInfo);
    await dispatch({ type: ADD_CREDIT, payload: data});
    await dispatch(setNotification("Nạp thẻ thành công"));
  } catch (error) {
    dispatch(setNotification("Nạp thẻ thất bại"));
  }
};

export const filterAccount = (categoryName) => async (dispatch) => {
  try {
    await dispatch(fetchAccount());
    await dispatch({ type: FILTER_ACCOUNT, payload: categoryName});
    await dispatch(setNotification(`Lọc theo ${categoryName} `));
  } catch (error) {
    console.log(error.message);
  }
};

export const filterAccountByRank = (rank) => async (dispatch) => {
  try {
    await dispatch(fetchAccount());
    await dispatch({ type: FILTER_ACCOUNT_BY_RANK, payload: rank});
    await dispatch(setNotification(`Lọc theo rank ${rank} `));
  } catch (error) {
    console.log(error.message);
  }
};

export const buyAccount = (userName, accInfo) => async (dispatch) => {
  try {
    const { data } = await api.buyAccount(userName, accInfo);
    await dispatch({ type: BUY_ACCOUNT, payload: data});
    await dispatch(fetchAccount());
    await dispatch(setNotification("Mua thành công"));
  } catch (error) {
    dispatch(setNotification("Mua thất bại"));
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
    await dispatch(setNotification("Xóa hoàn tất"));
  } catch (error) {
    dispatch(setNotification("Xóa thất bại"));
  }
};

export const updateAccount = (id, accountInfo) => async (dispatch) => {
  try {
    const { data } = await api.updateAccount(id, accountInfo);
    await dispatch({ type: UPDATE_ACCOUNT, payload: data});
    await dispatch(fetchAccount());
    await dispatch(setNotification("Cập nhật hoàn tất"));
  } catch (error) {
    dispatch(setNotification("Cập nhật thất bại"));
  }
};

export const createAccount = (accInfo) => async (dispatch) => {
  try {
    const { data } = await api.createAccount(accInfo);
    await dispatch({ type: CREATE_ACCOUNT, payload: data});
    await dispatch(fetchAccount());
    await dispatch(setNotification("Thêm hoàn tất"));
  } catch (error) {
    dispatch(setNotification("Thêm thất bại"));
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
    await dispatch(setNotification("Xóa hoàn tất"));
  } catch (error) {
    dispatch(setNotification("Xóa thất bại"));
  }
};

export const createCard = (cardInfo) => async (dispatch) => {
  try {
    const { data } = await api.createCard(cardInfo);
    await dispatch({ type: CREATE_CARD, payload: data});
    await dispatch(fetchCard());
    await dispatch(setNotification("Thêm hoàn tất"));
  } catch (error) {
    dispatch(setNotification("Thêm thất bại"));
  }
};
export const updateCard = (id, cardInfo) => async (dispatch) => {
  try {
    const { data } = await api.updateCard(id, cardInfo);
    await dispatch({ type: UPDATE_CARD, payload: data});
    await dispatch(fetchCard());
    await dispatch(setNotification("Cập nhật hoàn tất"));
  } catch (error) {
    dispatch(setNotification("Cập nhật thất bại"));
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
    await dispatch(setNotification("Xóa hoàn tất"));
  } catch (error) {
    dispatch(setNotification("Xóa thất bại"));
  }
};

export const createCategory = (categoryInfo) => async (dispatch) => {
  try {
    const { data } = await api.createCategory(categoryInfo);
    await dispatch({ type: CREATE_CATEGORY, payload: data});
    await dispatch(fetchCategory());
    await dispatch(setNotification("Thêm hoàn tất"));
  } catch (error) {
    dispatch(setNotification("Thêm thất bại"));
  }
};

export const updateCategory = (name, categoryInfo) => async (dispatch) => {
  try {
    const { data } = await api.updateCategory(name, categoryInfo);
    await dispatch({ type: UPDATE_CATEGORY, payload: data});
    await dispatch(fetchCategory());
    await dispatch(setNotification("Cập nhật hoàn tất"));
  } catch (error) {
    dispatch(setNotification("Cập nhật thất bại"));
  }
};



export const setNotification = (notification) => async (dispatch) => {
  try {
    dispatch({ type: SET_NOTIFICATION, payload: notification});
  } catch (error) {
    console.log(error.message);
  }
};

