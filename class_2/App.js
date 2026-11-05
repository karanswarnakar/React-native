import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Section1 from './components/screen/Section1';
import ButtonCustome from './components/ButtonCustome';

export default function App() {
  return (
    <>
      <View style={styles.app_container}>
        <Section1 />
       
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  app_container: {
    flex: 1,
    backgroundColor: '#fff',
  }, 
});
