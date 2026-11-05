import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Section1 from './components/screen/Section1';
import ButtonCustome from './components/ButtonCustome';
import { useState } from 'react';
import Message from './components/Message';

export default function App() {
  const [start, setStart] = useState(false)

  
  return (
    <>
    
      <View style={styles.app_container}>
        <ButtonCustome
          title={"Start Game"}
          onPress={()=>{
            setStart(true)
          }}
        />

        <Section1 start={start} />
          
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  app_container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center"
  },
});
