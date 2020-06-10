import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Container, Icon, Content, Item, Right } from 'native-base'
import Empty from '../reusable/Empty'
import MenuItem from '../reusable/MenuItem'
import empty from '../../assets/box.svg'

const SubProductList = ({ navigation }) => {

    const addCategory = () => {
        navigation.navigate('addcategoryitemform')
    }
    return (
        <ScrollView>
            <Container style={styles.container}>
                <Empty style={styles.empty}
                    onGotoAddCategory={addCategory}
                    title={'No product is found'}
                    details={'No Product is found in your Boutique'}
                    icon={empty}
                />
                <MenuItem
                    menutitle={"Menus"}
                    thumbnail={"https://images.unsplash.com/photo-1591472053294-031b45ac2f96?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=348&q=80"}
                />
            </Container>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    content: {
        flexDirection: 'row'
    },
    productCount: {
        padding: 10
    },
    productCountTitle: {
        padding: 10,
        fontWeight: 'bold',
        fontSize: 15
    },
    empty: {
        position: 'absolute',
        alignSelf: 'center'
    }
})
export default SubProductList;