import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, useWindowDimensions, Image } from 'react-native'
import Colors from '../../constantes/colors'
import { addToCart } from '../../store/reducers/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

const FoodMenuButton = ({items, navigation}) => {
    const {width, height} = useWindowDimensions()
    const item = items ? items.item : null
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    dispatch(addToCart(item))
                }}
                // style={styles.buttonContainer}
                style={{...styles.buttonContainer, height: height * 0.15}}
            >
                <View style={styles.bodyButtonContainer}>
                    <View style={styles.labelContainer}>
                        <Text style={styles.title}>{item.name}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                    
                    <Image style={styles.image} source={require('../../assets/images/background/defaultImage.png')} />
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal : 20
    },
    buttonContainer:{
        flex:1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        minWidth: '100%',
        padding: 10,
        borderRadius: 20
    },
    title:{
        fontSize: 30,
        color: Colors.headerTextColor,
        // fontFamily: 'PattayaRegular',
        fontFamily: 'Minimal',
        fontWeight: 'bold',
        height: '40%'
    },
    description:{
        flex: 1,
        fontSize: 22,
        color: 'white',
        fontFamily:  'Minimal',
        marginTop: 5,
        width: '70%'
    },
    bodyButtonContainer:{
        flex:1,
        flexDirection: 'row'
    },
    labelContainer:{
        flex: 1,
        minWidth: '40%'
    },
    image:{
        flex:1,
        maxHeight: '100%',
        borderRadius: 20,
        opacity: 0.6
    }
})
export default FoodMenuButton