import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (err: any) {
    console.log(
      `🐞 ~ It happened a problem when trying to store the key '${key}': ${
        err.messagge || err
      }`,
    );
  }
};

export const getData = async (key: string): Promise<any> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (err: any) {
    console.log(
      `🐞 ~ It happened a problem when trying to get the key '${key}': ${
        err.messagge || err
      }`,
    );
    return null;
  }
};
