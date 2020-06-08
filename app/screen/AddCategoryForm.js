import React, { useState, useEffect } from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Item, Container, Form, Content, Label, Input, Thumbnail } from 'native-base'
import IIcon from 'react-native-vector-icons/Ionicons'
import ActionButton from '../reusable/ActionButton'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import imgs from '../../assets/polo.jpg'

const AddCategoryForm = () => {

    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Constants.platform.ios) {
                const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        // console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
            console.log(result.uri);

        }
    };

    return (
        <View style={styles.container}>
            <Image
                width='200'
                height='200'
                source={{ uri: 'https://images.unsplash.com/photo-1591472053294-031b45ac2f96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=348&q=80' }}
                style={styles.image}
                resizeMode={'cover'} />
            {
                image && <Thumbnail large source={{ uri: image }} />
            }


            <View >

                <Image
                    width='200'
                    height='200'
                    source={{ uri: 'https://images.unsplash.com/photo-1591472053294-031b45ac2f96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=348&q=80' }}
                    style={styles.image} />



                <TouchableOpacity
                    style={styles.icon}
                    onPress={pickImage}>
                    <IIcon name="md-images" size={25} color='black' />
                </TouchableOpacity>
            </View>
            <Item floatingLabel style={styles.formItem}>
                <Label>Category Title</Label>
                <Input />
            </Item>

            <ActionButton title={'Add Category'} />

        </View>

    )
}

const styles = StyleSheet.create({
    image: {
        borderRadius: 150,
        resizeMode: 'cover'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    formItem: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20
    },
    icon: {
        borderRadius: 25,
        // backgroundColor: 'red',
        padding: 10,
        width: 50,
        // position: 'absolute',
        left: 0,
        top: 10,
        margin: 20
    },
    addButton: {
        backgroundColor: 'green',
        padding: 10,
        width: 150,
        borderRadius: 50
    }

})
export default AddCategoryForm;