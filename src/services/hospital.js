import http from './http';
import { loginUser } from './auth';

const baseURL = `${process.env.REACT_APP_API}/hospital`;

export const hospitalLogin = async (body) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await http.post(`${baseURL}/login`, body);

      if (res && res.data && res.data.token) {
        loginUser({ userType: 'hospital', token: res.data.token });
        resolve(res.data.token);
      } else {
        throw new Error('Token not found');
      }
    } catch (error) {
      reject(error);
    }
  });
};
