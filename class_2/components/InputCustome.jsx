import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

function InputCustome(props) {
    
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='99'
                maxLength={2}
                keyboardType='numeric'
                onChangeText={(e) => {
                    props.setInputText(e)
                }}
                value={props.value}
            />
        </View>
    )
}

export default InputCustome


const styles = StyleSheet.create({
    input: {
        // width:"100%",
        // backgroundColor:"red",
        padding: 10,
        fontSize: 50,
        borderBottomColor: "#1e1d1d",
        borderBottomWidth: 1,
        marginBottom: 20,
        alignItems: "center",
        textAlign: "center"
    },
})