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
import Loading from "../../components/Loadin.js";


export default function HomeScreen() {
  
  const [name,setName]=useState("")
  const [lastname,setLastName]=useState("")
  const [result,setResult]=useState("")
  const [isloading,setIsLoading]=useState(false)
  
  return (
    <View style ={styles.container}>
      <Image 
      source={require("../../assets/images/Login.png")}     
      style={styles.image}/>


      <Text>Welcome {result}</Text>
       <TextInput></TextInput>


      <Text>Name</Text>
      <TextInput 
      placeholder='Enter Your Name'
      style={styles.textInputStyle}
      onChangeText={(value)=>setName(value)}
      />
      <Text>Last Name</Text>
      <TextInput
       placeholder='Enter Your Last Name'
       style={styles.textInputStyle}
       onChangeText={(value)=>setLastName(value)}
       />

       <Pressable 
       onPress={()=>setIsLoading(true)}
       style={({pressed})=>[{
        
        backgroundColor: pressed ? "gray" : "lightblue"},
        
        styles.button]   }>
      <Text style={styles.buttonText}>Save</Text>

       </Pressable>

       {isloading ? <Loading changeIsLoading={()=>setIsLoading(false)}/> : null}

    </View>

);
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#fff",
    alignItems:"center",
    justifyContent:"center"
  },
  textInputStyle:{
    borderWidth:1,
    width:"80%",
    height:50,
    borderRadius:10,
    marginVertical:10,
    textAlign:"center",
  },
  button:{
    borderWidth:1,
    width:"80%",
    height:50,
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
    

    
  },
  buttonText:{
    fontWeight:"bold",
    color:"White"
  },
  image: {
    width:100,
    height:100,
  }
  

});