
import { Text, TextInput, View, StyleSheet } from 'react-native'
import ButtonCustome from '../ButtonCustome'
import InputCustome from '../InputCustome'
import { useState } from 'react'

function Section1() {
    const [inputText, setInputText] = useState("")
    return (
        <View style={styles.section1}>
            <Text style={styles.title}>Guess the number</Text>

            <View style={styles.box}>

            <Text style={styles.sub_title}>Enter a number</Text>
                <InputCustome
                    setInputText={setInputText}
                    value={inputText}
                />
                <View style={styles.btn_container}>
                    <ButtonCustome
                        onPress={() => {
                            console.log("RESET")
                            setInputText("")
                        }}
                        title='Reset'
                    />
                    <ButtonCustome
                        onPress={() => {
                            console.log("CONFIRM", inputText)
                        }}
                        title='Confirm'
                    />
                </View>

            </View>

        </View>
    )
}

export default Section1

const styles = StyleSheet.create({
    section1: {
        flex: 1,
        backgroundColor: "#dadada",
        alignItems:"center",
        paddingTop: 150
    },
    title:{
        fontSize:30,
        fontWeight:600,
        margin: 20
    },
    sub_title:{
        fontWeight:500,
        fontSize:22,
        marginTop:20
    },
    box:{
        width:300,
        backgroundColor: "#8b8b8b",
        flexDirection: "column",
        alignItems: "center",
        
        paddingHorizontal:20,
        paddingBottom: 20,
        borderRadius:10
    },
    
    btn_container:{
        width:"100%",
        flexDirection: "row",
        justifyContent:"center"
    }
})