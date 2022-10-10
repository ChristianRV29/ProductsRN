import AsyncStorage from '@react-native-async-storage/async-storage';

export const storageData = (key: string, value: string) => {
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
