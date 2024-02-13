import React, {useRef, useEffect, useState} from 'react';
import {
  Button,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
  NativeEventEmitter,
} from 'react-native';
import HeaderSubScreen from './HeaderSubScreen';
import {styleSheet} from '../../Style';
import LoginWithOTP from '../screen/login_screen';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProps } from '../../type';
import auth from '@react-native-firebase/auth';


export const LoginBtn = ({onPress}: {onPress: any}) => {
  return (
    <TouchableOpacity style={styles.loginBtn} onPress={onPress}>
      <Text style={{color: 'white', fontSize: 20}}>Log In</Text>
    </TouchableOpacity>
  );
};

export const SubmitBtn = ({onPress} : {onPress: any}) => {
  return(
  <TouchableOpacity style={[styles.loginBtn]}
  onPress={onPress} >
    <Text>Submit</Text>
  </TouchableOpacity>)
};

export let OTPS : string


//handle input OTP
export const OTPInput = ()=> {
  const OTPRef = useRef<Array<TextInput | null>>([]);
  const [OTP, setOTP] = useState('');
  const handleChangeText = (text: string, index: number) => {
    const newOTP = [...OTP];
    newOTP[index] = text;
    setOTP(newOTP.join(''));
    if(text.length !==0 ) {
        return OTPRef?.current[index+1]?.focus()
      }
      return OTPRef?.current[index-1]?.focus()
  };
  const navigation = useNavigation<HomeScreenNavigationProps>();
  const handleBackspace  = (index: number) => {
    handleChangeText('', index)
  };
  useEffect(() => {
    // Update the OTPS variable whenever OTP changes
    OTPS = OTP;
  }, [OTP]);

  return (
    <>
        <View>
          <View>

          <View style={styles.OTPContainer}>
            {[...Array(6)].map((item, index) => (
              <TextInput
              ref={refT=> {
                if(refT && !OTPRef.current.includes(refT)){
                  OTPRef.current = [...OTPRef.current, refT]
                }
              }}
                key={index}
                style={styles.OTPInput}
                maxLength={1}
                contextMenuHidden
                selectTextOnFocus
                keyboardType="decimal-pad"
                onChangeText={text=>{handleChangeText(text, index)}}
                onKeyPress={() => handleBackspace(index)}
              />
            ))}
          </View>
          </View>
          
          
    </View>
    </>
  );
};


export let phonenumberInput: string
//Input phone number
const LoginScreen = () => {
  //.......................................................................................................................

  const [number, setNumber] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  
  const handleInputChange = (text: string) => {
    setNumber(text);

    //console.log(phonenumberInput);
  };
  useEffect(() => {
    phonenumberInput = number
    // Perform any other actions with the updated number value here
  }, [number]);

  return (
    <View>
      <HeaderSubScreen screenName="Log in" goBack={()=>{}} />
      <View style={styles.containWrapper}>
        <Text style={{marginTop: 40, marginBottom: 10}}>Phone number</Text>
        <TextInput
          style={styles.input}
          placeholder="Cambodian number only"
          value={number}
          keyboardType="decimal-pad"
          //onFocus={() => setIsFocused(true)}
          onChangeText={handleInputChange}    
           /> 
      </View>
    </View>
  );
};




const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'grey'
  },
  OTPFocus: {
    borderWidth: 2,
    borderColor: 'green',
  },
  OTPContainer: {
    width: '94%',
    marginLeft: '3%',
    marginBottom: 30,
    marginTop: 30,
    flexDirection: 'row',
  },
  OTPInput: {
    backgroundColor: '#ECEBEB',
    height: 110,
    flex: 1,
    textAlign: 'center',
    borderRadius: 10,
    fontSize: 30,
    marginRight: 5,
  },
  input: {
    height: 50,
    borderWidth: 1,
    padding: 10,
  },
  containWrapper: {
    width: '94%',
    marginLeft: '3%',
  },
  loginBtn: {
    width: '100%',
    marginTop: 10,
    height: 50,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
