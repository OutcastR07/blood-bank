import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import LoginPage from "./pages/LoginPage";
import Services from "./pages/Services";
import HomeNavigation from "./navigation/navigation";
import ContextStore from "./Context/ContextStore";
import dispatch from "./dispatch/dispatch";
import actions from "./dispatch/actions";
import { getToken } from "./utils/storageUtils";
import Spinner from "react-native-loading-spinner-overlay"
export default function App() {
  useEffect(() => {
    (async () => {
        const response = await dispatch(actions.getAll)
        console.log(response)
        if(!response.error){
            const {doctors, hospitals, bloodBanks} = response
            const token = await getToken()
            console.log(token) 
            setContextStore({...contextStore, doctors, hospitals, bloodBanks, loggedIn: token ? true : false, token: token ? token: ""})
        }
    })()
  },[])
  const [showSpinner, _setShowSpinner] = useState(false)
  const [spinnerText, setSpinnerText] = useState('Loading..')
  const setShowSpinner = (status, text = 'Loading..') => {
    _setShowSpinner(status)
    setSpinnerText(text)
  }
    const [contextStore, setContextStore] = useState({
        hospitals: [],
        doctors: [],
        dentalCenters: [],
        bloodBanks: [],
        diagnosticCenters: [],
        loggedIn: false,
        user: {},
        token: "",
        setShowSpinner
    });
    useEffect(() => {
        if(contextStore.token){
            (async () => {
                const user = await dispatch(actions.getOwn, {}, {}, contextStore.token)
                if(!user.error){
                    setContextStore((past) => {
                        return {...past, user}
                    })
                
                }
                console.log(user)
            })()
        }
    },[contextStore.token])
    return (
        <ContextStore.Provider value={{ contextStore, setContextStore }}>
            <Spinner textContent={spinnerText} visible={showSpinner}/>
            <View style={styles.container}>
                <HomeNavigation />
            </View>
        </ContextStore.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
