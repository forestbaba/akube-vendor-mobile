import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Container } from 'native-base'
import SvgUri from 'react-native-svg-uri'
import ActionButton from './ActionButton'
import dress from '../../assets/dress.svg'

const Empty = ({ onGotoAddCategory, title, details,icon }) => {
    return (
        <Container style={styles.container}>
            <SvgUri
                style={{ marginRight: 30, width: 30 }}
                width='50'
                height='100'
                source={icon}
            />
            <Text style={styles.noProductTitle}>{title}</Text>
            <Text>{details}</Text>
            <ActionButton onPress={onGotoAddCategory} title={'Add product'} />

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