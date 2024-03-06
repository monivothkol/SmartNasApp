import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import HeaderSubScreen from '../component/HeaderSubScreen'
import { useNavigation } from '@react-navigation/native'
import { HomeScreenNavigationProps, HomeStackNavigationParamList } from '../../type'
import auth from '@react-native-firebase/auth';


const HistoryScreen = () => {
    const navigate = useNavigation<HomeScreenNavigationProps>();
    const backToHome = () => {
        
        navigate.navigate('Home', {number: auth().currentUser?.phoneNumber?.replace(/^\+855/, '')})
    }
    return(
    <View>
        <HeaderSubScreen screenName='Transaction Hsitory' goBack={backToHome}/>
    </View>

    )
}


export default HistoryScreen;