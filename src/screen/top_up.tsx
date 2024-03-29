import React, {useEffect, useState} from 'react';
import Header from '../component/home_Header';
import {Alert, Button, View} from 'react-native';
import HeaderSubScreen from '../component/HeaderSubScreen';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProps} from '../../type';
import {Text, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updateMainBalance, updateValidity} from '../store/userActions';
import { RootState } from '../store/store';

const TopUPScreen = () => {
const {userResource, loading} = useSelector((state: RootState) => state.userData);
  const navigate = useNavigation<HomeScreenNavigationProps>();
  const goBackToHomepage = () => {
    navigate.navigate('Home');
  };
  const [newBalance, setNewBalance] = useState('');
  const [newValidity, setValidity] = useState('');
  const dispatch = useDispatch();
  const handleUpdateBalance = () => {
    // Trim leading and trailing whitespace from the input
    const trimmedBalance = newBalance.trim();
    // Check if the input is empty or not a valid number
    if (trimmedBalance === '') {
      // Display an error message for empty or invalid input
      Alert.alert('Please enter a valid number for the new balance.');
    } else {
      // Parse the trimmed balance value as a number
      const parsedBalance = parseFloat(trimmedBalance);
      console.log(`passed balance ${parsedBalance}`)
      // Dispatch the updateMainBalance action with the parsed balance and phone number
      dispatch(updateMainBalance(parsedBalance));
      
      if (parsedBalance >= 1 && parsedBalance <= 1.24) {
        setValidity('7');
      } else if (parsedBalance >= 1.25 && parsedBalance <= 1.99) {
        setValidity('8');
      } else if (parsedBalance >= 2.00 && parsedBalance <= 4.00) {
        setValidity('15');
      } else if (parsedBalance >= 4.01 && parsedBalance <= 5.99) {
        setValidity('30');

      } else if (parsedBalance >= 6.00 && parsedBalance <= 8.00) {
        setValidity('35');

      } else if (parsedBalance >= 8.01 && parsedBalance <= 10) {
        setValidity('70');
      } else if (parsedBalance >= 10.01 && parsedBalance <= 20) {
        setValidity('100');
      } else if (parsedBalance >= 20.01 && parsedBalance <= 50) {
        setValidity('100');
      } else if (parsedBalance >= 50.1) {
        setValidity('200');
      }

      
    

      setNewBalance('');
    }
    
  };

  
  useEffect(() => {
    // This effect runs after newValidity state has been updated
    const convertedValidity = parseFloat(newValidity);
    if(convertedValidity > userResource[0].mainvalidity)
    dispatch(updateValidity(convertedValidity));
    else if( convertedValidity < userResource[0].mainvalidity)
    dispatch(updateValidity(userResource[0].mainvalidity));
  }, [newValidity]);

  return (
    <View>
      <HeaderSubScreen screenName="Top Up" goBack={goBackToHomepage} />
      <Text style={{color: 'blue', fontSize: 20}}>
        I'm lazy to do the UI. ប្រើចឹងទៅ​
      </Text>

      <TextInput
        style={{
          marginBottom: 20,
          color: 'white',
          backgroundColor: 'blue',
          borderColor: 'red',
          borderWidth: 1,
        }}
        value={newBalance} // Bind the value to the newBalance state
        onChangeText={setNewBalance} // Update the newBalance state when the text changes
        keyboardType="numeric"
      />

      <Button title="Top Up" onPress={handleUpdateBalance} />
    </View>
  );
};
export default TopUPScreen;
