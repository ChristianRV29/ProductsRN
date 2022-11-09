import axios from 'axios';

export const baseURL = 'http://192.168.0.11:8080/api'; // TODO: This should be a env variable

const cafeApi = axios.create({ baseURL });

export default cafeApi;
