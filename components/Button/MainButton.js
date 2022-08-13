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
import { LinearGradient } from 'expo-linear-gradient';

const MainButton = ({navigation, items}) => {
    const item = items.item
    const {width, height } = useWindowDimensions() //para el uso de las dimensiones de la pantalla
    return (
        <View style={{...styles.buttonContainer, height: height * 0.16}}>
            <TouchableOpacity 
                style={{...styles.menuButton, backgroundColor: Colors.accent, width: width * 0.40}}
                onPress={() => {navigation.navigate(item.route , { title: item.navTitle})}}
            > 
                <ImageBackground 
                    source={Images[item.source]} 
                    resizeMode="cover" 
                    style={styles.image} 
                    imageStyle={{opacity:0.95, borderRadius: 20}} 
                    key={item.id}
                >
                    <LinearGradient
                        // Background Linear Gradient
                        colors={['rgba(166, 140, 118, 0.4)', 'rgba(58, 50, 43, 1)']}
                        // colors={['rgba(116, 88, 122, 0.8)', 'rgba(61, 0, 255, 0.8)']}
                        style={styles.background}
                    >

                    <View style={styles.footer}>
                        <Text style={styles.text}>{item.title}</Text>
                    </View>
                    </LinearGradient>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    
    buttonContainer: {
        // flex:1,
        width: '50%',
        borderRadius: 22,
        // backgroundColor: 'blue',
        // justifyContent: 'center',
        minHeight: '20%',
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // paddingHorizontal: 15
    },
    background:{
        flex:1,
        width: '100%',
        borderRadius: 20,
        height: '100%',
        alignItems:'center',
        justifyContent: 'flex-end',

    },
    menuButton: {
        flex:1,
        // width: '',
        // height: '100%',
        borderRadius: 22,
        maxHeight: '90%'
        // backgroundColor: 'blue'
        // minHeight: '30%',
    },
    image:{
        flex: 1,
        backgroundColor:'white',
        alignItems:'center',
        borderRadius: 22,
        // paddingTop: '35%'
    },
    text: {
        color:'white',
        fontSize:32,
        // lineHeight: 84,
        // fontWeight: 'bold',
        fontFamily: 'Minimal',
        // color: 'white'
    },
    footer:{
        backgroundColor: 'rgba(0,0,0,0.7)',
        width: '100%',
        // borderRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center'
    }
    
})

export default MainButton