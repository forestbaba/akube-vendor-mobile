import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'

const ActionButton = ({ title, onPress }) => {
    return (
     

        <TouchableOpacity style={styles.addProductButton} onPress={onPress}>
            <Text style={styles.addButtonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    addButton: {
        backgroundColor: 'green',
        padding: 10,
        width: 150,
        borderRadius: 50
    },
    addButtonText: {
        fontWeight: 'bold',
        fontSize: 18,
        padding: 10,
        color: 'white'
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
})
export default ActionButton