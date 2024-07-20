import { StyleSheet,Text,View } from "react-native";
import React from "react"
import HomePage from "../screens/HomePage.js"
import ProfilePage from "../screens/ProfilePage.js"
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const UserStack = () => {

    return (
        <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{headerShown:false}}
        >
            
            <Stack.Screen name="Home" component={HomePage}/>
            <Stack.Screen name="Profile" component={ProfilePage}/>
        </Stack.Navigator>

    )
}

export default UserStack

