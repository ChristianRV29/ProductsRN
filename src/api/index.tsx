import axios from 'axios';

export const baseURL = 'http://192.168.0.15:8080/api';

const cafeApi = axios.create({ baseURL });

export default cafeApi;
