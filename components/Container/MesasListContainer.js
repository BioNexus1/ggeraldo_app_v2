import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import MainMesasList from '../List/MesasMain'
import MESAS from '../../testData/mesas.json'

const MesasListContainer = ({navigation}) => {
    const Mesas = MESAS.data.mesas

    const renderItem = (data) => (
        <MainMesasList items={data} navigation={navigation}   />
    )
    return (
        <View style={styles.container}>
            <FlatList 
                data={Mesas}
                renderItem={renderItem}
                key={item => item.id}
                numColumns={3}
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

const styles = StyleSheet.create({
    container:{
        flex:1,
        // flexDirection: 'column',
        // alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        // marginLeft: 20,
        // bottom: 0,
        // width: '100%',
        // height: '100%',
        // minHeight: '70%',
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        paddingHorizontal: 30
    },
    
})


export default MesasListContainer