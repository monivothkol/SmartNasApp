import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Animated,
  Modal,
  StyleSheet,
  Alert

} from 'react-native';
import HeaderSubScreen from '../component/HeaderSubScreen'
import LoginScreen, {
  LoginBTNConfirm,
  LoginBtn,
  OTPInput,
  SubmitBtn,
  OTPS,
  phonenumberInput
} from '../component/login_component';
import auth from '@react-native-firebase/auth';
import HomepageScreen from './homepage_screen';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase/auth';
import { HomeScreenNavigationProps } from '../../type';

const LoginOTP = () => {
  const [confirm, setConfirm] = useState(false);
  const [showOTP, setshowOTP] = useState(false);
  const navigation = useNavigation();
  const signInWithPhoneNumber = async phonenumber => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phonenumber);
      setConfirm(confirmation);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  ///Login button
  const onPressLogin = () => {
    try{
      if (!phonenumberInput) {
        throw new Error('Please enter correct number');
      }
      setshowOTP(true);
      let phonenumberInputFormat = phonenumberInput.replace(/^0/, "+855");
      signInWithPhoneNumber(phonenumberInputFormat);
      console.log('success signin');
    }
    catch(error){
      Alert.alert(error.message);
    }

    
  };

  const onAuthStateChanged = user => {
    if (user) {
      //use this to check user object from firebase
      //console.log('passing' + JSON.stringify(user));
      //get phonenumber from current logged in user
      navigation.navigate('Home', {number: auth().currentUser.phoneNumber.replace(/^\+855/, '')});
    }
  };

  //confirm OTP then go to homepage
  const confirmCode = async () => {
    try {

      await confirm.confirm(OTPS);
      console.log('corrrect');
    } catch (error) {
      console.log('Invalid code.');
    }
  };


  // save for the next login skip login page

  const currentUser = auth().currentUser;
  const goBack = () => {
    setshowOTP(false);
  };
  
if (!currentUser) {
  return (    
  <View style={styles.container}>
    {!showOTP ? (
    <View>
    <LoginScreen />
    <LoginBtn onPress={onPressLogin} />
    </View>
    ):(
      <View style={{backgroundColor: 'black'}}>
        <View style={{marginLeft: 10, marginRight: 10, marginTop: 5, }}>
            <LoginScreen />
            <LoginBtn onPress={onPressLogin} />
        </View>
      </View>
    )}
    <Modal
      animationType="slide"
      transparent={true}
      visible={showOTP}
      onRequestClose={goBack}
    >
      <View style={styles.modalContainer}>

        <HeaderSubScreen screenName="Log in" goBack={goBack} />
        <Text style={{marginTop: 40, marginLeft: 25, color: 'black', fontSize: 17}}>Confirmation code</Text>
        <OTPInput />
        <SubmitBtn onPress={confirmCode} />
      </View>
    </Modal>
  </View>
);
};

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  modalContainer: {
    marginTop: 15,
    width: '100%',
    backgroundColor: 'white',
  },
});

export default LoginOTP;
