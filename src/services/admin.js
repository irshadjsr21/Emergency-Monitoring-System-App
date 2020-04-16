import http from './http';
import { loginUser } from './auth';

const baseURL = `${process.env.REACT_APP_API}/admin`;

export const adminSignup = async (body) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await http.post(`${baseURL}/signup`, body);
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};

export const adminLogin = async (body) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await http.post(`${baseURL}/login`, body);

      if (res && res.data && res.data.token) {
        loginUser({ userType: 'admin', token: res.data.token });
        resolve(res.data.token);
      } else {
        throw new Error('Token not found');
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const createHospital = async (body) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await http.post(`${baseURL}/hospital`, body);
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};

export const createAmbulance = async (body) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await http.post(`${baseURL}/ambulance`, body);
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};
