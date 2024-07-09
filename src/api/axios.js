import axios from 'axios';

const api = axios.create({
  baseURL: 'https://loko.penumbra.press/api/',
});

// const api = axios.create({
//   baseURL: 'http://127.0.0.1:3500/api/',
// });


export default api;
