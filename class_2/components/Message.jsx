import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function Message(props) {
    return (
        <View style={styles.message_container}>
            <Text style={styles.message}>{props.text}</Text>
        </View>
    )
}

export default Message

const styles = StyleSheet.create({
    message_container: {
        position: "absolute",
        bottom: 80,
        backgroundColor: "#f0f0f0",
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
        boxShadow: '0px 4px 10px hsla(0, 0%, 4%, 0.35)',
        transform: [
            { translateY: 80 },
        ],
        opacity: 0

    },
    message: {},
    message_pop: {
         traFnsform: [
            { translateY: 0 },
        ],
        opacity: 1
    }
})