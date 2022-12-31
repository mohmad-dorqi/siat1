import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,ImageBackground, TextInput } from 'react-native';
import Home from './components/Home';

export default function App() {
  const image = { uri: "./assets/favicon.png" };
  const [flag,setFlag]=useState(false)
  if(flag){
    return (
    <Home/>
    );
  }
  return (
    <View style={styles.container}>

     <ImageBackground source={require('./assets/images/vrod.jpg')} resizeMode="repeat"  style={styles.image}>
       <View style={styles.login}>
         <Text style={styles.label}>ورود به سیات</Text>
         
         <TextInput style={styles.input}
           keyboardType="numeric"
         ></TextInput>
       </View>
    </ImageBackground>
    
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
    
  },
  stu:{
    backgroundColor: 'red'
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems:'center',
    textAlign:'center'
    
  },
  label:{
    color: "white",
    fontSize: 24,
    lineHeight: 50,
    
    fontWeight: "bold",
    textAlign: "center",
  
  },
  login:{
    backgroundColor:'red',
    width:350,
    textAlign:'center',
    borderRadius:10,
    padding:8
    
  },
  input:{
    borderColor:'white',
    borderWidth:2,
    backgroundColor:'white',
    borderRadius:5,
    padding:2
  }
  
});
