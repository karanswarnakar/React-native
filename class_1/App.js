import { useState } from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Button,
  Pressable
} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import TaskItem from './components/TaskItem.jsx';
import TakeInput from './components/TakeInput.jsx';

export default function App() {

  const [listTask, setListTask] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  function openModal() {
    setIsModalOpen(true)

  }

  function addEllement() {

    setListTask([
      { item: "Learn React", id: "1" },
      { item: "Learn JavaScript", id: "2" },
      { item: "Practice CSS", id: "3" },
      { item: "Build a Project", id: "4" },
      { item: "Learn Node.js", id: "5" },
      { item: "Practice MongoDB", id: "6" },
      { item: "Learn Express.js", id: "7" },
      { item: "Explore React Native", id: "8" },
      { item: "Complete Udemy Course", id: "9" },
      { item: "Upload Project to GitHub", id: "10" }
    ]);

  }



  function addTaskHandeler(e) {

    setListTask(prv => [...prv, { item: e, id: Math.random().toString() }])
  }
  function deleteTaskHandeler(id) {
    setListTask(pre => {
      return pre.filter((item) => item.id !== id)
    })

  }

  return (

    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        {/* <Button title='Add Task' onPress={openModal} color={"#5900ff"} /> */}

        <Pressable
          onPress={addTaskHandeler}
          style={styles.btn_con}
        >
          <Text onPress={openModal} style={styles.btn} >Add Task</Text>
        </Pressable>

        <Text>.</Text>
        <TakeInput onAddTask={addTaskHandeler} visiable={isModalOpen} setIsModalOpen={setIsModalOpen} />

        <Pressable
          style={styles.btn_con}
        >
          <Text onPress={addEllement} style={[styles.btn, styles.demobtn]} >Demo</Text>
        </Pressable>

        <View style={styles.listConteiner}>
          <Text style={styles.heddingSmall}>List of tasks</Text>
          <FlatList
            data={listTask}
            renderItem={(e) => {
              return <TaskItem task={e.item.item} id={e.item.id} onDelete={deleteTaskHandeler} />
            }}
            keyExtractor={(item, index) => {
              return item.id
            }}
          >
          </FlatList>
        </View>
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 70,
    paddingHorizontal: 20,
    flexDirection: "column",
    flex: 1
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
  listConteiner: {
    flex: 10
  },
  addbtn: {
    backgroundColor: "#2563eb",
  },
  demobtn: {
    backgroundColor: "#afb0b1",
  },
  btn: {
    textAlign: "center",
    padding: 12,
    backgroundColor: "#2563eb",
    borderRadius: 8,
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 16,
    overflow: "hidden",
  }
})