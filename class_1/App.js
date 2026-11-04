import { cacheSignal, useState } from 'react';
import { StyleSheet,ScrollView, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [inputText, setInputText] = useState("")
  const [listTask, setListTask] = useState([])
  
  
  function inputHandeler(text) {
    setInputText(text)
  }

  function addTaskHandeler(e) {

    

    setListTask(prv => [...prv, e])
    setInputText(" ")
  }


  return (

    <View style={styles.appContainer}>
      <View style={styles.internalSection}>
        <TextInput
          style={styles.inputArea}
          placeholder='Enter your task..'
          onChangeText={inputHandeler}
          value={inputText}
        />
        <Button title='Add task' onPress={() => {
          addTaskHandeler(inputText)
        }} />
      </View>
      <View  style={styles.listConteiner}>
        <ScrollView>
        <Text style={styles.heddingSmall}>List of tasks</Text>
        <View>
          {listTask.map((elm, idx) => {
            return <Text key={idx} style={styles.listElement}>{elm}</Text>
          })}
        </View>
      </ScrollView>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  appContainer: {

    padding: 70,
    paddingHorizontal: 20

  },
  internalSection: {
    flexDirection: "row",
    alignItems: "center",
    alignItems: "stretch",
  },
  inputArea: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    marginRight: 7,
    borderRadius: 5
  },
  heddingSmall: {
    fontSize: 18,
    color: "gray",
    marginTop: 25,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    borderStyle: "dotted",
    paddingBottom: 10,
    marginBottom: 10
  },

  listElement: {
    margin:8,
    
    backgroundColor:"#5900ff",
    color:"#fff",
    fontSize: 18,
    padding: 4,
    paddingHorizontal: 7,
    fontWeight: "500",
    borderRadius:8
  }
})