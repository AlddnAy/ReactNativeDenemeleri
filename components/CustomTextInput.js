import { StyleSheet,Text,View,TextInput } from "react-native";
import React from "react"

const CustomTextInput = ({title,isSecureText,onChangeText,value,placeholder}) => {

    return (
        <View style={styles.inputContainer}>
        <Text style={styles.inputBoxText}>{title}</Text>
        <TextInput 
        style={styles.textInputStyle}
        placeholder={placeholder}
        secureTextEntry={isSecureText}
        onChangeText={onChangeText}
        value={value}
        />

        </View>

    )
}

export default CustomTextInput

const styles =StyleSheet.create({
    inputContainer: {
        width:"80%"
    },
    inputBoxText:{
        fontWeight:"bold",
        alignSelf:"flex-start",
        color:"black",
        borderBottomWidth:0.5

    },
    textInputStyle:{
        borderBottomWidth:1,
        width:"100%",
        height:50,
        borderRadius:1,
        marginVertical:10,
        textAlign:"center",
        borderColor:"black",
        textAlign:"center",
        fontWeight:"bold"
      },

})