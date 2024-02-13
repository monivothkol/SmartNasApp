import React , {useEffect, useState} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    StyleSheet
  
  } from 'react-native';

const HomepageServiceSection = () => {
    const serviceName = 'MissedCallAlert';
    const benefitName1 = 'On-net SMS';
    const benefitName2 = 'On-net calls';
    const benefitName3 = 'On-net Data';
    const validity = 10;
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            marginBottom: 10,
            alignItems: 'center',
          }}>
          <Text style={{flex: 1}}>My services</Text>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: 'green'}}>Browse more</Text>
            <Image source={require('../../Asset/iCon/arrow.png')} />
          </TouchableOpacity>
        </View>
  
        <View>
          <View style={styleSheet.sectionContainer}>
            <View style={styleSheet.homePlan_Header}>
              <Image
                source={require('../../Asset/iCon/SmartLaor.png')}
                style={{marginRight: 20}}
              />
              <View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{color: 'green', fontSize: 20}}>Smart </Text>
                  <Text style={{fontWeight: 'bold', fontSize: 20}}>
                    {serviceName}
                  </Text>
                </View>
                <Text>Auto-renew in {validity} days</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity
                activeOpacity={1}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  marginTop: 5,
                  opacity: 0.4,
                }}>
                <Image source={require('../../Asset/iCon/arrow_down.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };



const styleSheet = StyleSheet.create({
    container:{
      flex: 1,
      
    },
  
    mainBalanceSectionBG:{
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'green',
        height: 40,
 
    },
    content_wrapper:{
      flex: 1,
      width: '92%',
      marginLeft: '4%',
  
    },
  
    header_Container:{
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: 'green',
      flexDirection: 'row',
      alignItems: 'center',
      height: '10%',
      paddingHorizontal: 20
    },
    headerLeft:{
      flexDirection: 'row',
      alignItems: 'center',
      flex:4
    },
    headerRight:{
      flex:1,
      flexDirection: 'row',
      justifyContent: 'space-between'
      
    },
    textWhite:{
      color: 'white',
     fontSize: 14
    },
    textGreen:{
      color: 'green',
      fontSize: 14
    },
    
    mainBalanceSection:{
        backgroundColor: 'white',
        borderColor: 'green',
        padding: 18,
        borderWidth: 3,
        height: 150,
        flexDirection: 'row',
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: -40
    },
    mainBalanceSectionL:{
      flex: 2
    },
    mainBalanceSectionR:{
      backgroundColor: 'yellow',
      flex: 1
    },
    mainBalanceText:{
      color: 'green',
      fontSize: 25,
      fontWeight: '500'
    },
    expireText: {
      color: 'green',
      paddingBottom: 12
    },
    scrollView:{
      flex: 1,
      backgroundColor: '#ECEBEB'
    },
    btnGreenCenter:{
      flexDirection: 'row',
      alignItems: 'center'
    },
    homepageBtn:{
      padding: 10,
      flexDirection: 'row',
  } ,
    btnGreen:{
      backgroundColor: 'green',
      flex: 1,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8
    },
    btnWhite:{
      backgroundColor: 'white',
      flex: 1,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8
    },
  
    sectionContainer :{
      padding: 25,
      width: '100%',
      height: 'auto',
      backgroundColor: 'white',
      borderRadius: 10
      
    },
    smartHomeSection_Btn :{

      flexDirection: 'row', 
      position: 'absolute', 
      bottom: 20, 
      left: 0,
      paddingLeft: 20,
      paddingRight: 20
    },

    homePlan_Header : {
      flexDirection: 'row'
    },
    homePlan_btnRenew:{
      alignSelf: "stretch",
      borderColor: 'green',
      borderWidth: 2,
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      backgroundColor: 'white', 
      borderRadius: 7,
      marginTop: 10, 
      marginBottom: 10
    },
    homePlan_btnRenewText:{
      color: 'green'
    },
    benefitDetail:{
      width: '100%',
      flexDirection: 'row',
      
    },
    benefitResource: {
        backgroundColor: '#ECEBEB',
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 7
    }
  
  
    
    
  });


  export default HomepageServiceSection;