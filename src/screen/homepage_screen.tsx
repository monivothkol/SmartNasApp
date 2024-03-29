import React, {useEffect, useState} from 'react';
import {styleSheet} from '../../Style';
import SectionContainer from '../component/home_sectionContainer'; 
import SMainBalanceSection from '../component/home_MainBalance';
import Header from '../component/home_Header';
import SetBtnWiCon from '../component/setBTNwithIcon';
import HomepagePlanSection from '../component/home_userPlanDetail';
import HomepageServiceSection from '../component/home_userServiceDetail';
import {useNavigation, useRoute} from '@react-navigation/native'; 
import {HomeScreenNavigationProps} from '../../type';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
  Dimensions,
  StatusBar,
  StyleSheet,
} from 'react-native';
import BottomNavBar from '../component/home_BottomNavigation';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from '../../src/store/store';
import { getUserResource, getUsersProfile } from '../store/userActions';



const HomepageScreen: React.FC<HomeScreenNavigationProps> = () => {

  const {userProfile} = useSelector((state: RootState) => state.userData);
  const image = 'https://legacy.reactjs.org/logo-og.png'

  const dispatch = useDispatch()
  const [alldataFetched, setAllDataFetched] = useState(false);


  // useEffect(() => { 
  //   dispatch(getUsersProfile()),dispatch(getUserResource())
  // },[])
  const navigation = useNavigation<HomeScreenNavigationProps>();
  const gotoTopUp = () => {
    
    navigation.navigate('TopUp');
  }

  useEffect(() => { 
    const fetchData = async () => {
      await dispatch(getUsersProfile());
      await dispatch(getUserResource());
      setAllDataFetched(true);
    };
    fetchData();
    
  },[])
  if (!alldataFetched) {
    return <ActivityIndicator />;
  } else {  
    return (
      <SafeAreaView style={styleSheet.container}>
        {/* Header */}
        <View>
          <StatusBar backgroundColor="green" />
          <View style={{height: '100%'}}>
            <View style={styleSheet.header_Container}>
              <Header
                phonenumber={`0${userProfile[0].phonenumber}`}
                lastname={userProfile[0].lastname}
              />
            </View>
            <ScrollView style={styleSheet.scrollView}>
              <TouchableOpacity activeOpacity={1}>
                <SMainBalanceSection />
              </TouchableOpacity>
              <View style={styleSheet.content_wrapper}>
                <View style={styleSheet.homepageBtn}>
                  <SetBtnWiCon iconName="service_icon" btnName="Service" />
                  <SetBtnWiCon iconName="topup_icon" btnName="Top up" onPress={gotoTopUp} />
                </View>
                <View>
                  <HomepagePlanSection />
                </View>
                <View>
                  <HomepageServiceSection />
                </View>
                <SectionContainer
                  sectionName="Home Internet by Smart"
                  backgroundImg={image}
                  btnAmount={2}
                  buttonNames={[
                    {
                      label: 'Explore home internet',
                      backgroundColor: 'green',
                      textColor: 'white',
                    },
                    {
                      label: 'Actuvate router',
                      backgroundColor: 'white',
                      textColor: 'green',
                    },
                  ]}></SectionContainer>
              </View>
            </ScrollView>
            <BottomNavBar />
          </View>
        </View>
      </SafeAreaView>
    );
  }
};



const styles = StyleSheet.create({
  statusBarStyle: {
    backgroundColor: 'green',
  },
});

export default HomepageScreen;
