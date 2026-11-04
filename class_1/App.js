import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.textStyle}>Hello,</Text>
        <Text style={styles.textStyle}>My name is <Text style={styles.hilightText}>Karan Swarnakar</Text> </Text>
        <Text style={styles.textStyle}>I am a <Text style={styles.hilightText}>Full stack developer.</Text></Text>
        <Button title="Click" style={styles.buttonStyle}/>
      </View>
       <View>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: 'powderblue',
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'skyblue',
        }}
      />
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: 'steelblue',
        }}
      />
    </View>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dadada",
  },
  textStyle:{
    fontSize: 20
  },
  hilightText:{
    fontWeight: "bold",
    fontSize:25
  },
  buttonStyle:{
         backgroundColor: 'powderblue',
    fontWeight: 'bold',
    fontSize: 30,
  }
})