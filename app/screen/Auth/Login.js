import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet,YellowBox, Dimensions, ScrollView, TouchableOpacity, ActivityIndicator, TextInput, Alert } from 'react-native'
import InputField from '../../reusable/InputField'
import PasswordField from '../../reusable/PasswordInputField'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Snackbar } from 'react-native-paper';
import { initiateCheckLoginStatus, initiateLoginAction } from '../../redux/auth/action';



const screenwidth = Dimensions.get('window').width;
const Login = ({ navigation }) => {
    const realdispatch = useDispatch();

    const [showpass, setshowpass] = useState(false)
    const [secure, setsecure] = useState(true)
    const [bordercolor, setbordercolor] = useState('')
    const [bordercolorPassword, setbordercolorPassword] = useState('')
    const [useremail, setUserEmail] = useState('')
    const [userpassword, setUserpassword] = useState('')
    const [errorMessage, seterrorMessage] = useState('')
    const [cred, setcred] = useState({})
    const [showSnackbar, setshowSnackbar] = useState(false)
    const [editable, seteditable] = useState(true)
    const [loginButtonEnabled, setloginButtonEnabled] = useState(true)
    const [showLoading, setshowLoading] = useState(false)


    useEffect(() => {
        YellowBox.ignoreWarnings(['Setting a timer']);
       console.ignoredYellowBox = ['Setting a timer']

        realdispatch(initiateCheckLoginStatus());

    }, [])


   
    const handleShowPassword = () => {
        setshowpass(!showpass)
        setsecure(!secure)
    }

    const gotosignup = () => {
        navigation.navigate('Signup')
    }
    const handleForgotpassword = () => {
        navigation.navigate('ForgotPassword')
    }
    const onchangeEmail = (text) => {

        setshowSnackbar(false)
        setUserEmail(text);
    }
    const onchangePassword = (text) => {
        setshowSnackbar(false)
        setUserpassword(text);
    }
    const isEmailValid = (uemail) => {
        console.log(uemail);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(uemail) === false) {
            console.log("Email is Not Correct");
            return false;
        }
        else {
            console.log("Email is Correct");
            return true
        }
    }

    const initiateLogin = () => {
        if (loginButtonEnabled) {
            if (useremail.length === 0) {
                setbordercolor('#ff0000')
                seterrorMessage('Email field is required')
                setshowSnackbar(true)
                setloginButtonEnabled(true)
                seteditable(true)



            }
            else if (userpassword.length === 0) {
                setbordercolorPassword('#ff0000')
                seterrorMessage('Password field is required')
                setshowSnackbar(true)
                setloginButtonEnabled(true)
                seteditable(true)
            }
            else if (!isEmailValid(useremail)) {
                seterrorMessage('Please enter a valid email')
                setshowSnackbar(true)
                setloginButtonEnabled(true)
                seteditable(true)


            }
            else if (userpassword.length < 8) {
                seterrorMessage('Password must be atleast 8 characters')
                setshowSnackbar(true)
                setloginButtonEnabled(true)
                seteditable(true)

            } else {
                seteditable(false)
                setloginButtonEnabled(false)
                setshowLoading(true)

                realdispatch(initiateLoginAction(useremail, userpassword))
               navigation.replace("Home")
            }
        }


    }
    const _showAlert = () => {
        Alert.alert(
            'Aviso',
            '¿Desea cerrar la sesion?',
            [
                { text: 'Ask me later', onPress: () => alert('Ask me later pressed') },
                { text: 'Cancel', onPress: () => alert('Cancel Pressed'), style: 'cancel' },
            ],
            { cancelable: false }
        )
    }


    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>

                <Text style={styles.title}>Akube</Text>
                <View style={styles.holder}>
                    <InputField
                        placeholder={"Email"}
                        icon={'user'}
                        bordercolor={bordercolor}
                        seteditable={editable}
                        onchange={text => onchangeEmail(text)}
                    />
                    <PasswordField placeholder={"Password"} icon={'key'}
                        secure={secure}
                        handleShowPassword={handleShowPassword}
                        showpass={showpass}
                        seteditable={editable}
                        bordercolor={bordercolorPassword}
                        onchange={text => onchangePassword(text)} />
                </View>
                <View style={styles.actionButtonHolder}>
                    <TouchableOpacity
                        onPress={handleForgotpassword}>
                        <Text style={styles.forgotpassword}>Forgot password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        disabled={loginButtonEnabled}
                        activeOpacity={loginButtonEnabled ? 0.5 : 1}>
                        <Text style={styles.loginbutton} onPress={initiateLogin}>Login</Text>
                    </TouchableOpacity>
                </View>

                {
                    showSnackbar ? <View style={styles.snackbar}>
                        <Text style={styles.snackbarDetails}>{errorMessage}</Text>
                    </View> : null
                }
                {showLoading ? (<ActivityIndicator
                    animating
                    color="green"
                    size="large"
                    style={styles.activityIndicator}
                />) : null}

                <View style={styles.signup_contain}>
                    <Text style={styles.signupp}>Don't have an account ?</Text>
                    <TouchableOpacity style={styles.signup_button}
                        onPress={gotosignup}>
                        <Text style={styles.signup}>Sign up</Text>
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
        marginTop: 30,
        //  width: 220
        width: screenwidth / 1.2
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
    },
    snackbar: {
        flex: 1,
        position: 'absolute',
        width: screenwidth,
        backgroundColor: 'black',
        padding: 10,
        // height:300,
        bottom: 40
        // height: 100, width: '100%'
    },
    snackbarDetails: {
        color: 'white',
        textAlign: 'center'
    }

})
export default Login