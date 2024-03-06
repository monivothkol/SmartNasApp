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
  StatusBar,
  StyleSheet

} from 'react-native';
import BottomNavBar from '../component/home_BottomNavigation';



const HomepageScreen: React.FC<HomeScreenNavigationProps> = ({route}) => {
  console.log(route)
  const [validity, setValidity] = useState(0);
  const {number} = route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([] as any[]);
  const getUser = async () => {
   
    try {
      console.log('fetch this number' + number)
      const response = await fetch(
      `https://vothsmartdb.onrender.com/smartnas_db/user_profile/${number}`
      )
      if (!response.ok) {
        setLoading(true) // Throw an error for non-200 status codes
      }
      else{
        const json = await response.json(); 
        setData(json);
        setValidity(10);
        setLoading(false);
      }
    }
    catch (error) {
      console.error(error);
      setLoading(true)
    }
  
  };
  useEffect(() => {
    getUser();
  }, [] );
  useEffect(()=>{
    isLoading
  }, [isLoading])

  const image = 'https://legacy.reactjs.org/logo-og.png'
  
  if(isLoading == true){
    return(
    <ActivityIndicator />
    )
  }
  else {return (
    <SafeAreaView style={styleSheet.container}>
      {/* Header */}
      <View>
        <StatusBar
          backgroundColor= 'green'
        />

        <View style={{height: '100%'}}>    
          <View style={styleSheet.header_Container}>
            <Header phonenumber = {'0'+data[0].phonenumber} lastname={data[0].lastname}/>
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
  
      </View>

      
    </SafeAreaView>
  );}
};

const styles = StyleSheet.create({
  statusBarStyle:{
    backgroundColor: 'green'
  }
})

export default HomepageScreen;
