import axios from 'axios';

// const API_URL = 'http://localhost:8080/api/auth/';
import { ENDPOINT } from '../config/endpoint';
const register = (username, email, password) => {
  return axios.post(ENDPOINT.auth.register, {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(ENDPOINT.auth.login, {
      username,
      password,
    })
    .then((response) => {
      if (response.data.secretData) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

export default {
  register,
  login,
  logout,
};
