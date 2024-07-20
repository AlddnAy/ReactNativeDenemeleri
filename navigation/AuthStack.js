import { StyleSheet,Text,View } from "react-native";
import React from "react"
import LoginPage from "../screens/LoginPage.js"
import SingupPage from "../screens/SingupPage.js"
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const AuthStack = () => {

    return (
        <Stack.Navigator
        
        initialRouteName="Login"
        screenOptions={{headerShown:false}}
        >
            <Stack.Screen name="Login" component={LoginPage}/>
            <Stack.Screen name="SingUp" component={SingupPage}/>

        </Stack.Navigator>

    )
}

export default AuthStack


