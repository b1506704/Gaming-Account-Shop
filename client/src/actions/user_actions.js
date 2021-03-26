import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  ADD_TO_CART_USER,
  GET_CART_ITEMS_USER,
  REMOVE_CART_ITEM_USER,
  ON_SUCCESS_BUY_USER
} from '../constants/actionTypes';

import * as api from '../api/index.js';

//successfully get data from backend
// export const getLp = () => async (dispatch) => {
//   try {
//     const { data } = await api.fetchLp();
//     dispatch({ type: FETCH_ALL, payload: data });
//     console.log(data);
//   } catch (error) {
//     console.log(error.message);
//   }
// };
//successfully push data to backend
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
export const login = (userName, passWord) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_USER, payload: {userName, passWord}});
    // send data to backend
  } catch (error) {
    console.log(error.message);
  }
};

