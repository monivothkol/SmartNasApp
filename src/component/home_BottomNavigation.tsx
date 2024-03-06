import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {styleSheet} from '../../Style';
import SetBtnWiCon from '../component/setBTNwithIcon';
import {HomeScreenNavigationProps} from '../../type';
import {useNavigation} from '@react-navigation/native';
import MenuScreen from '../screen/menu_screen';
import auth from '@react-native-firebase/auth';

const BottomNavBar: React.FC<HomeScreenNavigationProps> = () => {
    const navigation = useNavigation<HomeScreenNavigationProps>();
  const HomeBtnMenu = () => {
    navigation.navigate('Menu', {number: auth().currentUser?.phoneNumber?.replace(/^\+855/, '')});
  };

  const HomeBtnHome = () => {
    navigation.navigate('Home', {number: auth().currentUser?.phoneNumber?.replace(/^\+855/, '')});
  }
  
  const HomeBtnHistory = () => {
    console.log('history pressed');
    navigation.navigate('History');
  };
  return (
    <View style={styles.navbarContainer}>
      <SetBtnWiCon
        iconName={'home_icon'}
        btnName="Home"
        containerStyle={styles.navItem}
        onPress={HomeBtnHome}
      />
      <SetBtnWiCon
        iconName={'history_icon'}
        btnName="History"
        containerStyle={styles.navItem}
        onPress={HomeBtnHistory}
      />
      <SetBtnWiCon
        iconName={'SmartVIP_icon'}
        btnName="SmartVIP"
        containerStyle={styles.navItem}
      />
      <SetBtnWiCon
        iconName={'leng_icon'}
        btnName="Leng Center"
        containerStyle={styles.navItem}
      />
      <SetBtnWiCon
        iconName={'menu_icon'}
        btnName="Menu"
        containerStyle={styles.navItem}
        onPress={HomeBtnMenu}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  navItem: {
    fontSize: 17,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    color: 'black',
  },
});

export default BottomNavBar;
