import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import Header from '../component/home_Header';
import {useState, useEffect} from 'react';

import {useNavigation, useRoute} from '@react-navigation/native';
import {HomeScreenNavigationProps} from '../../type';
import {phonenumberInput} from '../component/login_component';
import {SetBtnWhiteBG} from '../component/setBTNwithIcon';
import {SafeAreaView} from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth'
import { firebase } from '@react-native-firebase/auth';
import BottomNavBar from '../component/home_BottomNavigation';
import { Auth } from 'firebase/auth';
import { User } from 'firebase/auth';


const MenuScreen: React.FC<HomeScreenNavigationProps> = ({route}) => {
  const {number} = route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([] as any[]);
  const getUser = async () => {
    try {
      const response = await fetch(
        `https://vothsmartdb.onrender.com/smartnas_db/user_profile/${number}`,
      );
      const json = await response.json();
      console.log('Fetched data:', json);
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(onAuthStateChanged);
    return () => {
      unsubscribe(); 
    };
  }, []);
  const navigation = useNavigation<HomeScreenNavigationProps>();
  const onAuthStateChanged = (user: Auth) => {
    
    if (!user) {
      console.log('User signed out');
      navigation.navigate('Login')
      // Navigate to the login screen or perform other actions when the user signs out
    }
  };
  //const navigation = useNavigation<HomeScreenNavigationProps>();
  const signOutAction = async () => {
    try {
        await auth().signOut().then(()=>{
            console.log("User Signed Out Successfully!");
            onAuthStateChanged;
        })
        
        
      } catch (error) {
        console.log(error);
      }
    
  }

  return (
    <View>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : data.length > 0 ? (
        <SafeAreaView style={{height: '100%'}}>
          <View style={styles.headerContainer}>
            <Image source={require('../../Asset/iCon/profile_holder.png')} />
            <View style={styles.headerUserName}>
              <Text style={styles.headerName}>{data[0].lastname}</Text>
              <Text style={styles.headerPhonenumber}>0
                {data[0].phonenumber}
              </Text>
            </View>
          </View>
          <ScrollView style={{flex: 1}}>
            <View style={styles.menuSection}>
              <SetBtnWhiteBG btnName="Plans" iconName="plan_icon" />
              <SetBtnWhiteBG btnName="Services" iconName="plan_icon" />
              <SetBtnWhiteBG btnName="Smart Tunes" iconName="plan_icon" />
              <SetBtnWhiteBG btnName="Buy new eSIM" iconName="plan_icon" />
            </View>
            <View style={styles.menuSection}>
              <SetBtnWhiteBG
                btnName="Payment methods"
                iconName="paymentmethod_icon"
              />
              <SetBtnWhiteBG
                btnName="Security PIN"
                iconName="securitypin_icon"
              />
              <SetBtnWhiteBG btnName="Settings" iconName="setting_icon" />
            </View>
            <View style={styles.menuSection}>
              <SetBtnWhiteBG
                btnName="Sign out"
                iconName="signout_icon"
                onPress={signOutAction}
              />

            </View>
          </ScrollView>
          <View>
          <BottomNavBar/>
          </View>
          
        </SafeAreaView>
      ) : (
        <Text>No data available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  menuSection: {
    width: '100%',
    height: 'auto',
    marginTop: 30,
  },
  headerContainer: {
    height: 100,
    padding: 20,
    backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerUserName: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  headerName: {
    color: 'white',
    fontSize: 25,
  },
  headerPhonenumber: {
    color: 'white',
    fontSize: 15,
  },
});

export default MenuScreen;
