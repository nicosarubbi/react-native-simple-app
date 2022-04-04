import AsyncStorage from '@react-native-async-storage/async-storage';


export async function storeData(key, value) {
  try {
    let jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    console.log(e)
  }
}

export async function getData(key, defaultValue) {
  try {
    let jsonValue = await AsyncStorage.getItem(key);
    console.log('json value:', jsonValue)
    if (jsonValue != null) {
      return JSON.parse(jsonValue)
    } else {
      return defaultValue
    }
  } catch(e) {
    console.log(e)
    return null
  }
}

