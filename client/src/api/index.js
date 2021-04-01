import axios from 'axios';
// url để gửi dữ liệu trên localhost server
const userUrl = 'http://localhost:80/users';
const accountUrl = 'http://localhost:80/accounts';
const categoryUrl = 'http://localhost:80/categories';

// url để gửi dữ liệu đến web trên herokuapp
// const userUrl = 'https://gaming-account-shop.herokuapp.com/users';
// const accountUrl = 'https://gaming-account-shop.herokuapp.com/accounts';
// const categoryUrl = 'https://gaming-account-shop.herokuapp.com/categories';

export const createUser = (newUser) => axios.post(userUrl, newUser);
export const login = (userInfo) => axios.post(`${userUrl}/${userInfo}`, userInfo);
export const logout = (userInfo) => axios.post(`${userUrl}/logout/${userInfo}`, userInfo);
export const fetchAccount = () => axios.get(accountUrl);
export const createAccount = (newAccount) => axios.post(accountUrl, newAccount);