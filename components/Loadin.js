import { StyleSheet,Text,View,ActivityIndicator, Pressable} from "react-native"
import React from "react"

const Loading = (props )=> {
return(
        <View style={styles.container}>
            <Pressable
            onPress={()=>props.changeIsLoading()}
            style={({},styles.closeButtonContainer)}>
            <Text style={styles.closeButton}>X</Text>

            </Pressable>
            
            <ActivityIndicator size ={"Large"} color={"lightblue"}/>
            <Text style={styles.loginText}>Loading...</Text>
            
        </View>




    )
}

export default Loading

const styles=StyleSheet.create({
    container: {
        flex:1,
        position:"absolute",
        backgroundColor:"darkgray",
        width:"100%",
        height:"100%",
        alignItems:"center",
        justifyContent:"center"
    },
    loginText: {
        fontSize:16,
        fontWeight:"bold",
        fontStyle:"italic",
        color:"lightblue",
        textAlign:"center",
        justifyContent:"center",
        marginTop:20,
    },
    closeButtonContainer:{
        backgroundColor:"black",
        width:50,
        height:50,
        alignItems:"center",
        justifyContent:"center",   
        borderRadius:30,
        position:"absolute",
        top:50,
        right:20,

    },
    closeButton: {
        fontWeight:"bold",
        
        color:"white",
        fontSize:12,
        
    }



})