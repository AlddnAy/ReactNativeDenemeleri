import { StyleSheet,Text,View,Pressable } from "react-native";
import React from "react"

const CustomButton = ({bttnText,handleOnPress,setWidth,bttnColor,pressButtonColor}) => {

    return (
        
        <Pressable 
                onPress={handleOnPress}
                style={({pressed})=>[{
                    width:setWidth,
                    backgroundColor: pressed ? pressButtonColor : bttnColor
                },
                
                styles.button]   }>
            <Text style={styles.buttonText}>{bttnText}</Text>
 
        </Pressable>
        
    )
}

export default CustomButton

const styles =StyleSheet.create({
    button:{
        borderWidth:1,
        width:"80%",
        height:50,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
  
      },
      buttonText:{
        fontWeight:"bold",
        color:"black"
      },
      singupButtonText:{
        fontWeight:"bold",
        color:"White"
      },

})