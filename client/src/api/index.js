import axios from 'axios';
// url để gửi dữ liệu trên localhost server
// const userUrl = 'http://localhost:80/users';
// const accountUrl = 'http://localhost:80/accounts';
// const categoryUrl = 'http://localhost:80/categories';
// const cardUrl = 'http://localhost:80/cards';

// url để gửi dữ liệu đến web trên herokuapp
const userUrl = 'https://gaming-account-shop.herokuapp.com/users';
const accountUrl = 'https://gaming-account-shop.herokuapp.com/accounts';
const categoryUrl = 'https://gaming-account-shop.herokuapp.com/categories';
const cardUrl = 'https://gaming-account-shop.herokuapp.com/cards';

// user routes
export const createUser = (newUser) => axios.post(userUrl, newUser);
export const login = (userInfo) => axios.post(`${userUrl}/${userInfo}`, userInfo);
export const logout = (userInfo) => axios.post(`${userUrl}/logout/${userInfo}`, userInfo);
export const addCredit = (userName, creditInfo) => axios.post(`${userUrl}/addCredit/${userName}`, creditInfo);
// load account tu db
export const fetchAccount = () => axios.get(accountUrl);
// admin routes
export const createAccount = (newAccount) => axios.post(accountUrl, newAccount);
export const createCard = (newCard) => axios.post(cardUrl, newCard);
export const fetchCard = () => axios.get(cardUrl);