// import axios from 'axios';
// import { authService } from './service/authService';

// const instance = axios.create({
//   baseURL: 'https://backend-molaa.onrender.com/', 
// });

// instance.interceptors.request.use(
//   (config) => {
//     const token = authService.getToken();
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );``

// export default instance; 

import axios from 'axios';
import { authService } from '../service/authService';

const api = axios.create({
    //api base url
  baseURL: 'https://e-comm-app-fo7i.onrender.com', 
});

api.interceptors.request.use(
  (config) => {
    const token = authService.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;