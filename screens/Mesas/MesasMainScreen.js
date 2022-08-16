import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import OnWorkingFooter from '../../components/footer/OnWorkingFooter';
import Colors from '../../constantes/colors';
import MesasListContainer from '../../components/Container/MesasListContainer';


const MesasMainScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <MesasListContainer navigation={navigation} />
            {/* <OnWorkingFooter /> */}
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.Container,
        // height: '100%'
        // backgroundColor: 'black'
    },
})
export default MesasMainScreen