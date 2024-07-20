import { 
    Image, 
    StyleSheet,
    Platform,
    Text,
    View ,
    TextInput,
    Pressable,
  } from 'react-native';
  
  import React,{useState} from 'react';
  import {Loading,CustomTextInput,CustomButton} from "../components/";
  
  
  const LoadingPage= ({navigation}) => {
    
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [result,setResult]=useState("")
    const [isloading,setIsLoading]=useState(false)
    
    return (
      <View style ={styles.container}>
        <Text style={styles.Welcome}>Welcome {result}</Text>

        <Image 
        source={require("../assets/images/Login.png")}     
        style={styles.image}/>


        <CustomTextInput
         title="Email"
         isSecureText={false}
         onChangeText={setEmail}
         value={email}
         placeholder="Enter Your Email"


        
        />
        <CustomTextInput
          title="Password"
          isSecureText={true}
          onChangeText={setPassword}
          value={password}
          placeholder="Enter Your Password"
        
        />

        <CustomButton
          bttnText="Login"
          setWidth="80%"
          handleOnPress={()=>navigation.navigate("Home")}
          bttnColor="lightblue"
          pressButtonColor="gray"
        
        
        />

        <CustomButton
          bttnText="Sing Up"
          setWidth="30%"
          handleOnPress={()=>navigation.navigate("SingUp")}
          bttnColor="lightgray"
          pressButtonColor="gray"
        
        />

  
         {isloading ? <Loading changeIsLoading={()=>setIsLoading(false)}/> : null}
  
      </View>
  
  );
  }

  export default LoadingPage
  
  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: "#fff",
      alignItems:"center",
      justifyContent:"center"
    },
    image: {
      width:100,
      height:100,
      marginBottom:20,
    },

    Welcome:{
      fontWeight:"bold",
      fontSize:20,
      marginBottom:30,
    },
    singupButton:{
      borderWidth:1,
      width:"30%",
      height:50,
      borderRadius:10,
      alignItems:"center",
      justifyContent:"center",
 
    },
    
  
  });