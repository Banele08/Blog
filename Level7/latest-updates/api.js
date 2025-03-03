import axios from 'axios';
import { BsPostage } from 'react-icons/bs';

const API_URL = 'http://localhost:5000'; // Backend server URL

export const getUsers = async () => {
    const response = await axios.get(`${www.reqres.in/api/users}/users`);
    return response.data;
};

export const createUser = async (user) => {
    const response = await axios.post(`${www.reqres.in/api/users}/users`, user);
    return response.data;
};

export const getPosts = async () => {
    const response = await axios.get(`${www.reqres.in/api/BsPostage}/posts`);
    return response.data;
};

export const createPost = async (post) => {
    const response = await axios.post(`${www.reqres.in/api/post}/posts`, post);
    return response.data;
};

export const getComments = async () => {
    const response = await axios.get(`${www.reqres.in/api/comments}/comments`);
    return response.data;
};

export const createComment = async (comment) => {
    const response = await axios.post(`${www.reqres.in/api/comments}/comments`, comment);
    return response.data;
};