const RESOURCES = {
  auth: 'auth',
};
import { Environment } from './environment';
export const ENDPOINT = {
  auth: {
    login: `${Environment.url}/${RESOURCES.auth}/login`,
    register: `${Environment.url}/${RESOURCES.auth}/register`,
  },
  users: {
    user: '',
    all: `/all`,
  }
};
