import React from 'react'
import { View, Text, StyleSheet, useWindowDimensions, Image, TouchableOpacity } from 'react-native'
import Colors from '../../constantes/colors'

const MesasMain = ({items, navigation}) => {
    const item = items.item
    const {width, height } = useWindowDimensions() //para el uso de las dimensiones de la pantalla
    
    return (
    <TouchableOpacity 
            onPress={() => {navigation.navigate('MesasDetail' , { id: item.id})}}
    >
        <View style={{...styles.container,height: height * 0.18, width: width * 0.25}}>
                <Image 
                    source={require('../../assets/images/icons/plate_iconPNG.png')} 
                    style={styles.iconImage}
                />
                <View style={styles.subFooter}>
                    {
                        item.disponibility ? 
                        <Text style={{...styles.subFooterTitle, color: 'red'}}>En uso</Text> 
                        : 
                        <Text style={styles.subFooterTitle}>Disponible</Text>
                    }
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerTitle}>{item.name}</Text>
                </View>
        </View>
    </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        // height: '100%',
        // width: '100%',
        // flex:1,
        // maxHeight: '25%',
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 20,
        margin: 5
    },
    footer:{
        // flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '25%',
        backgroundColor: 'rgba(0,0,0,0.8)',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    footerTitle:{
        color: Colors.headerTextColor,
        fontFamily: 'PattayaRegular',
        fontSize: 20

    },
    iconImage:{
        // flex:1,
        width: '80%',
        height: '80%'
    },
    subFooter:{
        // flex: 1,
        backgroundColor: 'rgba(15,15,15,0.8)',
        width: '100%',
        alignItems: 'center',
    },
    subFooterTitle:{
        color: 'green',
        fontFamily: 'Minimal',
        fontSize: 15,
        fontWeight: 'bold'
    }
})
export default MesasMain