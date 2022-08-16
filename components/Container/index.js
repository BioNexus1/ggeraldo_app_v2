import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
// import Colors from '../../constantes/colors'
import  MAINBUTTONS  from '../../testData/menuButtons.json'

import MainButtonC from '../Button/MainButton'

const Container = ({navigation}) => {
    
    const mainButtons = MAINBUTTONS.data.mainButton
    const renderItem = (data) => (
         <MainButtonC items={data} navigation={navigation}  />
    )
    
    return (
        <View style={styles.container}>
            <FlatList 
                data={mainButtons}
                renderItem={renderItem}
                key={item => item.id}
                numColumns={2}
                contentContainerStyle={{ flexGrow: 1, alignItems: 'center'}}
                ItemSeparatorComponent={
                    (props) => {
                    // console.log('props', props); // here you can access the trailingItem with props.trailingItem
                    return (<View style={{height: 0}} />);
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
        // alignContent: 'center',
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: 20,
        marginLeft: 10,
        // bottom: 0,
        // width: '100%',
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    
})


export default Container