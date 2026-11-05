import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'

function ButtonCustome(props) {
    return (
        <Pressable onPress={props.onPress} style={styles.btn}>
            <Text style={styles.btnText}>
                {props.title}
            </Text>
        </Pressable>
    )
}

export default ButtonCustome

const styles = StyleSheet.create({
    btn: {
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 5,
        alignItems: 'center',
        margin:5
    },
    btnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
})