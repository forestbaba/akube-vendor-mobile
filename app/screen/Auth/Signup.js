import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import InputField from '../../reusable/InputField'
import PasswordField from '../../reusable/PasswordInputField'
const screenwidth = Dimensions.get('window').width;
const Signup = ({ navigation }) => {


    const [showpass, setshowpass] = useState(false)
    const [secure, setsecure] = useState(true)
    const handleShowPassword = () => {
        setshowpass(!showpass)
        setsecure(!secure)
    }

    const goback = () => {
        navigation.goBack()
    }
    return (
        <View style={{ flex: 1 }}>

            <View style={styles.container}>

                <Text style={styles.title}>Akube</Text>
                <View style={styles.holder}>
                    <InputField placeholder={"Full name"} icon={'user'} />
                    <InputField placeholder={"Email"} icon={'email'} />
                    <InputField placeholder={"Mobile"} icon={'phone'} />
                    <PasswordField placeholder={"Password"} icon={'key'}
                        secure={secure}
                        handleShowPassword={handleShowPassword}
                        showpass={showpass} />
                </View>
                <View style={styles.actionButtonHolder}>

                    <TouchableOpacity>
                        <Text style={styles.loginbutton}>Sign up</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.signup_contain}>
                    <Text style={styles.signupp}>Already have an account ?</Text>
                    <TouchableOpacity style={styles.signup_button}
                        onPress={goback}>
                        <Text style={styles.signup}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleholder: {
        top: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: screenwidth
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    holder: {
        // marginVertical: 40
    },
    actionButtonHolder: {
        // flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // width: 220
        // width:screenwidth
    },
    loginbutton: {
        color: 'white',
        backgroundColor: 'green',
        textAlign: 'center',
        padding: 10,
        borderRadius: 5,
        fontWeight: 'bold',
        width: 100,
        marginLeft: 40
    },

    forgotpassword: {
        paddingLeft: 15
    },
    signup: {
        color: 'green',
        textAlign: 'center',
        paddingHorizontal: 15,
        fontWeight: 'bold',
        fontSize: 18,
        // bottom: 10
    },
    signup_contain: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10,
        // justifyContent: 'center',
        // alignItems:'center'
    }

})
export default Signup