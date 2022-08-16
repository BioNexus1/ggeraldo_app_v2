import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import OnWorkingFooter from '../../components/footer/OnWorkingFooter';
import  Colors  from '../../constantes/colors';
import MESAS_DETAIL from '../../testData/mesasDetail.json'

const OnWorkingScreen = ({route}) => {

    const { id } = route.params;
    const mesasDetail = MESAS_DETAIL.data.mesas
    const item = mesasDetail.find(mesasDetail => mesasDetail.id === id)
    console.log(item)
    return (
        <View style={styles.screen}>
            <View style={styles.detail}>
                <Text style={styles.title}>{item.name}</Text>
                <View style={styles.detailContainer}>
                    <View style={styles.labelsContainer}>
                        <Text style={styles.text}>Cant. de personas</Text>
                        <Text style={styles.text}>Aperitivo</Text>
                        <Text style={styles.text}>Cenicero</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={{...styles.text, fontWeight: 'bold'}}>{item.cantPers}</Text>
                        {
                            item.aperitivo ? 
                                <Text style={{...styles.text, fontWeight: 'bold', color: 'green'}}>Sí</Text>
                                :
                                <Text style={{...styles.text, fontWeight: 'bold', color: 'red'}}>No</Text>
                        }
                        {
                            item.fumador ? 
                                <Text style={{...styles.text, fontWeight: 'bold', color: 'green'}}>Sí</Text>
                                :
                                <Text style={{...styles.text, fontWeight: 'bold', color: 'red'}}>No</Text>
                        }
                    </View>
                </View>

            </View>
            <OnWorkingFooter />

        </View> 
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.Container,
        padding: 20,
        // alignItems: 'center'
    },
    background: {
        flex: 1,
        maxHeight: '30%',
        // left: 0,
        // right: 0,
        // top: 0,
    },
    title:{
        fontSize: 42,
        fontFamily: 'Minimal',
        color: 'white',
        height: '25%'
    },
    image:{
        flex: 1,
    },
    detail:{
        flex:1,
        margin: 20,
        borderColor: Colors.headerTextColor,
        borderWidth: 1,
        padding: 20,

    },
    detailContainer:{
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'flex-start',
        // alignItems: 'flex-start',
        // alignSelf: 'baseline',
        alignContent: 'space-between'

    },
    labelsContainer:{
        // flex: 1,
        width: '75%'
        // justifyContent: 'flex-start',
        // flexDirection: 'row'
    },
    textContainer:{
        flex: 1,
        alignContent: 'flex-end'
    },
    text:{
        color: Colors.headerTextColor,
        fontFamily: 'Minimal',
        fontSize: 25,
        height: '25%'
    }
})

export default OnWorkingScreen