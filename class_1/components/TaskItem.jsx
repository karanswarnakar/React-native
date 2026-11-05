import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

function TaskItem(props) {
    return (
        <View style={styles.allTask}>
            <Pressable
                onPress={() => props.onDelete(props.id)}
                style={({ pressed }) => [
                    styles.pressable,
                    pressed && styles.pressed
                ]}
            >
                <Text style={styles.listElement}>
                    {props.task}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    allTask: {
        margin: 4,
        borderRadius: 8,
        overflow: 'hidden'
    },
    pressable: {
        backgroundColor: '#5900ff',
        borderRadius: 8
    },
    pressed: {
        backgroundColor: '#3900a2',
        opacity: 1
    },
    listElement: {
        color: '#fff',
        fontSize: 18,
        padding: 10,
        fontWeight: '500'
    }
})

export default TaskItem