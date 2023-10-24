import axios from 'axios';
import authHeader from './auth-header';

import { ENDPOINT } from '../config/endpoint';

const getPublicContent = () => {
  return axios.get(ENDPOINT.users.all);
};

const getUserBoard = () => {
  return axios.get(ENDPOINT.users.user, { headers: authHeader() });
};
export default {
  getPublicContent,
  getUserBoard,
};
