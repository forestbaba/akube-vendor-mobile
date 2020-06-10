import React from 'react'
import { Thumbnail } from 'native-base'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import EIcon from 'react-native-vector-icons/Entypo'

const MenuItem = ({ thumbnail, menutitle, clickEdit, clickDelete, gotoSublist }) => {
    return (
        <TouchableOpacity onPress={gotoSublist}>
            <View style={styles.container}>
                <Thumbnail large source={{ uri: thumbnail }} />
                <Text>{menutitle}</Text>
                <TouchableOpacity onPress={clickEdit}>
                    <EIcon name="pencil" size={25} color={'black'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={clickDelete}>
                    <MIcon name="delete-forever" size={25} color={'black'} />
                </TouchableOpacity>
            </View >
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 5,



        marginLeft: 0,
        marginRight: 0,
        margin: 5,
        borderRadius: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        padding: 5
    }

})
export default MenuItem;