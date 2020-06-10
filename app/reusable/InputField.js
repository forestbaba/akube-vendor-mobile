import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import EIcon from 'react-native-vector-icons/Entypo'

const InputField = ({ title, placeholder, icon, secure }) => {
    return (
        <View style={styles.container}>
            <EIcon name={icon} color="black" size={20} />
            <TextInput placeholder={placeholder} style={styles.textinput}
                secureTextEntry={secure}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:10
    },
    textinput: {
        width:220,
        marginLeft: 10,
        marginRight: 10,
        height: 33,
        borderWidth:1,
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight:10
    }
})
export default InputField