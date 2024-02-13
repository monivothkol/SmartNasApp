import React , {useEffect, useState} from 'react';
import {styleSheet} from '../../Style';
import SectionContainer from '../component/home_sectionContainer';
import SMainBalanceSection from "../component/home_MainBalance";
import Header from '../component/home_Header';
import SetBtnWiCon from '../component/setBTNwithIcon';
import HomepagePlanSection from '../component/home_userPlanDetail';
import HomepageServiceSection from '../component/home_userServiceDetail';
import { useRoute } from '@react-navigation/native';
import { HomeScreenNavigationProps } from '../../type';
import {  
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
  Dimensions,

} from 'react-native';
import BottomNavBar from '../component/home_BottomNavigation';



const HomepageScreen: React.FC<HomeScreenNavigationProps> = ({route}) => {
  
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
    }
    finally {
    setLoading(false);
  }
  };
  useEffect(() => {
    getUser();
  }, []);

  const image = 'https://legacy.reactjs.org/logo-og.png'
  
  return (
    <SafeAreaView style={styleSheet.container}>
      {/* Header */}
      <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={{height: '100%'}}>
        <View style={styleSheet.header_Container}>
          <Header phonenumber = {data[0].phonenumber} lastname={data[0].lastname}/>
        </View>
          <ScrollView style={styleSheet.scrollView}>
          <TouchableOpacity activeOpacity={1}>
            <SMainBalanceSection/>
          </TouchableOpacity>


          <View style={styleSheet.content_wrapper}>
            <View style={styleSheet.homepageBtn}>
              <SetBtnWiCon iconName="service_icon" btnName="Service" />
              <SetBtnWiCon iconName='topup_icon' btnName='Top up'/>
            </View>


            <View>
              <HomepagePlanSection />
            </View>
            <View>
              <HomepageServiceSection />
            </View>
            <SectionContainer
                sectionName='Home Internet by Smart'
                backgroundImg = {image}
                btnAmount={2}
                buttonNames={[
                  { label: 'Explore home internet', backgroundColor: 'green', textColor: 'white' },
                  { label: 'Actuvate router', backgroundColor: 'white', textColor: 'green'},
                ]}
              >
            </SectionContainer>


            
            
          </View>
        </ScrollView>
        <BottomNavBar/>
      </View>
      )}
      </View>

      
    </SafeAreaView>
  );
};

export default HomepageScreen;
