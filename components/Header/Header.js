import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from '../../constantes/colors'

const Header = props => {
    const { title } = props

    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:'15%',
        paddingTop: 16,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        // borderBottomLeftRadius: 20,
        borderBottomRightRadius: 50
    },
    headerTitle: {
        color: Colors.headerTextColor,
        fontSize: 65,
        fontFamily:'AuthorizedSignature'
        // fontFamily:'SquarePegRegular'
    }
})

export default Header