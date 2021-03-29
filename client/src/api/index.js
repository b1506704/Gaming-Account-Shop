import axios from 'axios';
// url để gửi dữ liệu trên localhost server
// const url = 'http://localhost:80/users';
// url để gửi dữ liệu đến web trên herokuapp
const url = 'https://gaming-account-shop.herokuapp.com/users';

export const createUser = (newUser) => axios.post(url, newUser);