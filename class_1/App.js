import { useState } from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';
import TaskItem from './components/TaskItem.jsx';
import TakeInput from './components/TakeInput.jsx';

export default function App() {
  const [inputText, setInputText] = useState("")
  const [listTask, setListTask] = useState([])


  function inputHandeler(text) {
    setInputText(text)
  }

  function addTaskHandeler(e) {



    setListTask(prv => [...prv, { item: e, id: Math.floor(Math.random()).toString() }])
    setInputText(" ")
  }


  return (

    <View style={styles.appContainer}>
      <View style={styles.internalSection}>
        <TakeInput
          placeholder='Enter your task..'
          onChangeText={inputHandeler}
          value={inputText}
        />
        <Button title='Add task' onPress={() => {
          addTaskHandeler(inputText)
        }} />
      </View>
      <View style={styles.listConteiner}>
        <Text style={styles.heddingSmall}>List of tasks</Text>
        <FlatList
          data={listTask}
          renderItem={(e) => {
            return <TaskItem task={e.item.item} />
          }}
          keyExtractor={(item, index) => {
            return item.id
          }}
        >
        </FlatList>
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
    alignItems: "stretch",
    justifyContent:"space-between"
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
  }
})