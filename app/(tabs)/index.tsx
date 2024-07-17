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


export default function HomeScreen() {
  
  const [name,setName]=useState("")
  const [lastname,setLastName]=useState("")
  const [result,setResult]=useState("")
  
  return (
    <View style ={styles.container}>

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
       onPress={()=>setResult(name+" "+lastname)}
       style={({pressed})=>[{
        
        backgroundColor: pressed ? "gray" : "lightblue"},
        
        styles.button]   }>
      <Text style={styles.buttonText}>Save</Text>

       </Pressable>

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
  }
  

});