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

const onAuthStateChanged = (user) => {
  if (!user) {
    console.log('User signed out');
    // Navigate to the login screen or perform other actions when the user signs out
  }
};


const MenuScreen: React.FC<HomeScreenNavigationProps> = ({route}) => {
  const {number} = route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([] as any[]);
  const getUser = async () => {
    try {
      const response = await fetch(
        `http://172.18.0.144:3000/smartnas/userprofile/${number}`,
      );
      const json = await response.json();
      console.log('Fetched data:', json);
      setData(json);
      //return json.userprofile;
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
  const signOutAction = async () => {
    console.log('first+ ' + auth().currentUser)
    try {
        await auth().signOut().then(()=>{
            console.log("User Signed Out Successfully!");
            navigation.navigate('Login')
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
        <SafeAreaView>
          <View style={styles.headerContainer}>
            <Image source={require('../../Asset/iCon/profile_holder.png')} />
            <View style={styles.headerUserName}>
              <Text style={styles.headerName}>{data[0].lastname}</Text>
              <Text style={styles.headerPhonenumber}>0
                {data[0].phonenumber}
              </Text>
            </View>
          </View>
          <ScrollView>
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
