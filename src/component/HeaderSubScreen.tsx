import React from "react";
import {Text, View, StyleSheet, Touchable, TouchableOpacity, Image} from 'react-native'
import { styleSheet } from "../../Style";

const HeaderSubScreen = ({screenName, goBack }:{screenName: string, goBack: () => void}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.BackBtn} onPress={goBack}>
                <Image source={require('../../Asset/iCon/arrow_down.png')}  style={{transform: [{rotate: '90deg'}]}}/>
            </TouchableOpacity>
            <Text style={styles.nameText}>{screenName}</Text>
        </View>
        )
};

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },
    nameText:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    BackBtn:{
        position: 'absolute',
        left: 0,
        marginLeft: 10,
    }
})

export default HeaderSubScreen;