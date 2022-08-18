import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import FoodMenuButton from '../Button/FoodMenuButton'

import PRODUCTS from '../../testData/products.json' 

const MenuContainer = ({navigation}) => {

    const products = PRODUCTS.data.products
    const renderItem = (data) => (
        <FoodMenuButton items={data} navigation={navigation}   />
    )
    return (
        <View style={styles.container}>
            <FlatList 
                data={products}
                renderItem={renderItem}
                key={item => item.id}
                contentContainerStyle={{ flexGrow: 1}}
                ItemSeparatorComponent={
                    (props) => {
                        // console.log('props', props); // here you can access the trailingItem with props.trailingItem
                        return (<View style={{flex: 1, height: 10}} />);
                        // return (<View style={{height: 0, backgroundColor: props.highlighted ? 'green' : 'gray'}} />);
                    }
                }

            />
        </View>
    )
}
const  styles =  StyleSheet.create({
    container: {
        flex: 1,
    }
})
export default MenuContainer