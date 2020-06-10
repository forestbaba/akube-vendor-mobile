import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import EIcon from 'react-native-vector-icons/Entypo'

const PasswordField = ({ title, placeholder, icon, secure,showpass, handleShowPassword }) => {
    return (
        <View style={styles.container}>
            <EIcon name={icon} color="black" size={20} />
            <TextInput placeholder={placeholder} style={styles.textinput}
                secureTextEntry={secure} />
            <TouchableOpacity style={styles.eye} onPress={handleShowPassword}>
                {showpass ? <EIcon name={'eye'} color="black" size={20} /> :  <EIcon name={'eye-with-line'} color="black" size={20} />  }
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    textinput: {
        width: 220,
        marginLeft: 10,
        marginRight: 10,
        height: 33,
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 25
    },
    eye: {
        position: 'absolute',
        right: 13
    }
})
export default PasswordField