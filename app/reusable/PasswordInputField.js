import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity,Dimensions } from 'react-native'
import EIcon from 'react-native-vector-icons/Entypo'

const screenWidth = Dimensions.get('window').width
const PasswordField = ({ title, placeholder, icon, bordercolor, seteditable,
    secure, showpass, onchange, handleShowPassword }) => {
    const inputstyle = [styles.textinput];
    inputstyle.push({ borderColor: bordercolor })
  
    return (
        <View style={styles.container}>
            <EIcon name={icon} color="black" size={20} />
            <TextInput placeholder={placeholder} style={inputstyle}
                secureTextEntry={secure}
                editable={seteditable}

                onChangeText={onchange}/>
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
        width: screenWidth / 1.3,
        marginLeft: 10,
        marginRight: 10,
        height: 45,
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