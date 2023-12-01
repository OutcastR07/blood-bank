import AsyncStorage from '@react-native-async-storage/async-storage';   

const storeToken = async (token) => {
    try{
        await AsyncStorage.setItem("token", token)
    }
    catch(err){
        console.log(err.message)
    }
}

const getToken = async () => {
    try{
        const token = await AsyncStorage.getItem("token")
        return token
    }
    catch(err){
        console.log(err.message)
    }
}

const removeToken = async () => {
    try{
        await AsyncStorage.removeItem("token")
    }
    catch(err){
        console.log(err.message)
    }
}
export {storeToken, getToken, removeToken}