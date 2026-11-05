import React, { useState } from 'react'
import { TextInput, Text, View, StyleSheet, Pressable, Modal, Image } from 'react-native'

function TakeInput(props) {
  const [inputText, setInputText] = useState("")

  function addTaskHandeler() {
    if (inputText === "") {
      return "Write a task..."
    }
    props.onAddTask(inputText)
    setInputText("")
    props.setIsModalOpen(pre => !pre)
  }

  return (
    <Modal visible={props.visiable} animationType='slide'>
      <View style={styles.inputConteiner}>
          <View style={styles.image_con}>
            <Image style={styles.image} source={require("../assets/images/goal.png")}/>
          </View>
        <View style={styles.internalSection}>
          <TextInput
            style={styles.inputArea}
            placeholder="Enter a task.."
            onChangeText={(text) => {
              setInputText(text)
            }}
            value={inputText}
          />
          <View style={{flexDirection: 'row'}}>
            {/* Add Task */}
            <Pressable
              onPress={addTaskHandeler}
              style={styles.btn_con}
            >
              <Text style={styles.btn} >Add Task</Text>
            </Pressable>
            {/* Close */}
            <Pressable
              onPress={()=>{
                props.setIsModalOpen(false)
              }}
              style={styles.btn_con}
            >
              <Text style={styles.btn} >Close</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>

  )
}

const styles = StyleSheet.create({
  inputConteiner: {
    flex: 1,
    backgroundColor: "#3409a8",
    justifyContent: "center",
    flexDirection: "column",
    paddingHorizontal: 40,
  },

  inputArea: {
    flex: 1,
    width: "100%",
    minHeight: 50,
    backgroundColor: "#ffffff",
    color: "#000000",
    borderWidth: 1,
    borderColor: "#888888",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    fontSize: 16,

  },
  image_con:{
    alignItems:"center",
    marginBottom:10
  },
  image:{
    height: 100,
    width:100,

  },
  btn_con: {
    flex:1,
    // backgroundColor: "red"
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
    margin:3
  },

  internalSection: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
})
export default TakeInput

