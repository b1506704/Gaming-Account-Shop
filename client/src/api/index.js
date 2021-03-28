import axios from 'axios';

// const url = 'http://localhost:80/users';
const url = 'https://gaming-account-shop.herokuapp.com/users';

// export const fetchPosts = () => axios.get(url);
export const createUser = (newUser) => axios.post(url, newUser);
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
// export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
// export const deletePost = (id) => axios.delete(`${url}/${id}`);