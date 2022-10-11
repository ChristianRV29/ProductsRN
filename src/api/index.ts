import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const baseURL = 'http://192.168.0.16:8080/api'; // TODO: This should be a env variable

const cafeApi = axios.create({ baseURL });

// cafeApi.interceptors.request.use(async (config: any) => {
//   const token = await AsyncStorage.getItem('@user_token');

//   if (token) {
//     config.headers['x-token'] = token;
//   }
//   return config;
// });

export default cafeApi;
