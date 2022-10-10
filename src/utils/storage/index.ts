import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = (key: string, value: string) => {
  return new Promise<string>(async (resolve, reject) => {
    try {
      await AsyncStorage.setItem(key, value).then(() => {
        resolve(`The element ${key} has been saved succesfully`);
      });
    } catch (err: any) {
      reject(
        `It happened a problem when it's trying to save the element ${key}: ${
          err.message || err
        }`,
      );
    }
  });
};

export const getData = (key: string) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      await AsyncStorage.getItem(key)
        .then(value => {
          resolve(value);
        })
        .catch(err => reject(err));
    } catch (err: any) {
      reject(err);
    }
  });
};
