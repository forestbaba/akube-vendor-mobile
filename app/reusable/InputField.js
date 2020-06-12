import React from 'react'
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native'
import EIcon from 'react-native-vector-icons/Entypo'

const screenWidth = Dimensions.get('window').width

const InputField = ({ title, placeholder, icon, secure, bordercolor, seteditable, onchange }) => {
    const inputstyle = [styles.textinput];
    inputstyle.push({ borderColor: bordercolor})

    return (
        <View style={styles.container}>
            <EIcon name={icon} color="black" size={20} />
            <TextInput
                onChangeText={onchange}
                placeholder={placeholder}
                style={inputstyle}
                editable={seteditable}
                secureTextEntry={secure} />
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
        width: screenWidth / 1.3,
        marginLeft: 10,
        marginRight: 10,
        height: 45,
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
    }
})
export default InputField