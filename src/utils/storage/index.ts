import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = (key: string, value: string): Promise<boolean> => {
  return new Promise(async (resolve, reject) => {
    await AsyncStorage.setItem(key, value)
      .then(() => {
        console.log(`The item '${key}' has been stored successfully`);
        resolve(true);
      })
      .catch((err: any) => {
        console.log(
          `It happened a problem when trying to store: ${err.message || err}`,
        );
        reject(false);
      });
  });
};
