import { StyleSheet,Text,View } from "react-native";
import React from "react"
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from "./AuthStack";
import UserStack from "./UserStack";
import { NavigationContainer } from "@react-navigation/native";


const Stack = createNativeStackNavigator();

const isAuth=false

const rootNavigation = () => {

    return (
        <NavigationContainer independent={true}>
            {
                !isAuth ?  <AuthStack/> : <UserStack/>
            }

        </NavigationContainer>
    )
}

export default rootNavigation

