import axios from 'axios';

export const instance = axios.create({
  //  baseURL: 'http://localhost:8080',
 baseURL: 'https://fit2be-project-backend-thanamin.vercel.app/',
  //withCredentials: true, 
  // เพื่อให้ส่ง cookie ได้
});