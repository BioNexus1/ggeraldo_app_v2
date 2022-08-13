import React from 'react'
import { 
    View, 
    Text,  
    TouchableOpacity, 
    ImageBackground, 
    StyleSheet,
    useWindowDimensions } from 'react-native'
import Colors from '../../constantes/colors'
import Images from '../../assets/images/images'

const MainButton = ({navigation, items}) => {
    const item = items.item
    const {width, height } = useWindowDimensions() //para el uso de las dimensiones de la pantalla
    return (
        <View style={{...styles.buttonContainer, height: height * 0.18}}>
            <TouchableOpacity 
                style={{...styles.menuButton, backgroundColor: Colors.accent, width: width * 0.5}}
                onPress={() => {navigation.navigate(item.route , { title: item.navTitle})}}
            > 
                <ImageBackground 
                    source={Images[item.source]} 
                    resizeMode="cover" 
                    style={styles.image} 
                    imageStyle={{opacity:0.65}} 
                    key={item.id}
                >
                    <Text style={styles.text}>{item.title}</Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    
    buttonContainer: {
        // flex:1,
        width: '50%',
        // backgroundColor: 'blue',
        // justifyContent: 'center'
        // minHeight: '100%',
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // paddingHorizontal: 15
    },
    menuButton: {
        // flex:1,
        // width: '',
        height: '100%',
        // minHeight: '20%',
    },
    image:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'white',
        alignItems:'center'
    },
    text: {
        color:'black',
        fontSize:35,
        lineHeight: 84,
        // fontWeight: 'bold',
        fontFamily: 'PattayaRegular'
    }
    
})

export default MainButton