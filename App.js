import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,ImageBackground, TextInput, Pressable } from 'react-native';
import Home from './components/Home';

export default function App() {
  const image = { uri: "./assets/favicon.png" };
  const [flag,setFlag]=useState(false);
  const [text,setText]=useState({
    user:'',
    password:''
  });
 
  if(flag){
    return (
    <Home/>
    );
  }
  return (
    <View style={styles.container}>

     <ImageBackground source={require('./assets/images/vrod.jpg')} resizeMode="repeat"  style={styles.image}>
       <View style={styles.login}>
         <Text style={styles.title}>ورود به سیات</Text>
        <Text style={styles.label}>
           نام کاربری: 
        </Text>
         <TextInput style={styles.input}
           keyboardType="numeric"
           onChangeText={(user)=>setText({...text,password:user})}
         ></TextInput>
          <Text style={styles.label}>
           نام کاربری: 
        </Text>
         <TextInput style={styles.input}
           keyboardType="numeric"
           secureTextEntry={true}
           onChangeText={(pass)=>setText({...text,password:pass})}
         ></TextInput>

         <Pressable>
           <Text style={styles.text}>ورود </Text>
         </Pressable>
         
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
  title:{
    color: "white",
    fontSize: 24,
    lineHeight: 50,
    marginBottom:10,
    fontWeight: "bold",
    textAlign: "center",
  
  },
  login:{
    backgroundColor:'#95d5b2',
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
    padding:2,
    marginBottom:25
  },
  label:{
    color:'black',
    fontWeight: "bold"
    
  },
  text:{
    textAlign:'center',
    marginBottom:15,
    backgroundColor:'red',
    marginLeft:90,
    marginRight:90,
    height:35,
    padding:5,
    fontSize:18,
    borderRadius:5
  }
  
});
