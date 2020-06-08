import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Container } from 'native-base'
import SvgUri from 'react-native-svg-uri'
import ActionButton from './ActionButton'

const Empty = ({ onGotoAddCategory }) => {
    return (
        <Container style={styles.container}>
            <SvgUri
                style={{ marginRight: 30, width: 30 }}
                width='50'
                height='100'
                source={require('../../assets/dress.svg')}
            />
            <Text style={styles.noProductTitle}>No product is found</Text>
            <Text>No Product is found in your Boutique</Text>
            <ActionButton onPress={onGotoAddCategory} title={'Add product'}/>
           
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    addProductButton: {
        backgroundColor: 'green',
        borderRadius: 25,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        marginTop: 15

    },
    addButtonText: {
        fontWeight: 'bold',
        fontSize: 18,
        padding: 10,
        color: 'white'
    },
    noProductTitle: {
        fontWeight: 'bold',
        fontSize: 18
    }
})
export default Empty