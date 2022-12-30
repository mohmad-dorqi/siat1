import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';

export default function App() {
  const image = { uri: "./assets/favicon.png" };
  return (
    <View style={styles.container}>

     <ImageBackground source={require('./assets/favicon.png')} resizeMode="cover"  style={styles.image}>
       <Text style={styles.text} >ورود به برنامه</Text>
    </ImageBackground>
    
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    
  },
  stu:{
    backgroundColor: 'red'
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text:{
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
  
});
