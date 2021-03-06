import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Container, Icon, Content, Item, Right } from 'native-base'
import Empty from '../reusable/Empty'
import MenuItem from '../reusable/MenuItem'
import dress1 from '../../assets/hanger.svg'

const ProductList = ({ navigation }) => {

    const addCategory = () => {
        navigation.navigate('addcategoryform')
    }
    const gotoSublist = () => {
        navigation.navigate('subproduct')
    }
    return (
        <ScrollView>
            <Container style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.productCount}>0</Text>
                    <Text style={styles.productCountTitle}>Content</Text>
                    <Right>
                        <TouchableOpacity onPress={addCategory}>
                            <Icon active name="add" />
                        </TouchableOpacity>
                    </Right>
                </View>
                <Empty style={styles.empty}
                    onGotoAddCategory={addCategory}
                    title={'No product is found'}
                    details={'No Product is found in your Boutique'}
                    icon={dress1}
                />
                <MenuItem
                    gotoSublist={gotoSublist}
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
export default ProductList;