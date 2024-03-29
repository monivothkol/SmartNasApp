import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import {Circle, Svg} from 'react-native-svg';
import { useDispatch, useSelector } from 'react-redux';
import { getUserResource, getUsersProfile } from '../store/userActions';
import { RootState } from '../store/store';
import ProgressBar from './home_validityProgress';

const SMainBalanceSection = () => {
  const dispatch = useDispatch()
  useEffect(() => { 
    dispatch(getUserResource())
  },[])
  const {userResource, loadingResource} : any = useSelector((state: RootState) => state.userData)
    // const mainBalance = 10;
    console.log(`reseouce ${loadingResource}`)
  const mainBalance = parseFloat(userResource[0].mainbalance);
    const mainExpiry = '29.01.24';
    const initialValidity = 8; 
    //const currentValidity = parseFloat(userResource[0].mainvalidity); 
    const currentValidity = 8;
    const statusDescription = "You're good to go! Enjoy using Smart.";
    
    const progressValue = (currentValidity / initialValidity) * 95;; 

    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = `${circumference} ${circumference}`;
    const strokeDashoffset = (25 / 100) * circumference;
    const progressStrokeDashoffset = (((125 - progressValue) / 125) * circumference);
   
    if (!loadingResource) {
      return <ActivityIndicator />;
    } else {  
    return (
      <View>
        <View style={styleSheet.mainBalanceSectionBG} />
        <View style={styleSheet.mainBalanceSection}>
          <View style={styleSheet.mainBalanceSectionL}>
            <Text>Main balance</Text>
            <Text style={styleSheet.mainBalanceText}>
              {mainBalance.toFixed(2)} USD
            </Text>
            <Text style={styleSheet.expireText}>expires on {mainExpiry}</Text>
            <Text>{statusDescription}</Text>
          </View>
          <View style={styleSheet.mainBalanceSectionR}>
            <Svg height="100%" width="100%" viewBox="0 0 100 100">
              <Circle
                cx="50"
                cy="50"
                r={radius}
                stroke="#C0C0C0"
                strokeWidth="7"
                fill="transparent"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                transform="rotate(135 50 50)"
              />
              
              <Circle
                cx="50"
                cy="50"
                r={radius} 
                stroke="green"
                strokeWidth="7"
                fill="transparent"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={progressStrokeDashoffset}
                transform="rotate(135 50 50)"
              />
              <View style={{height: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                  <Text style={{fontSize: 30, color: 'green', fontWeight: 'bold'}}>{currentValidity}</Text>
                  <Text >Day</Text>
              </View>
              

            </Svg>
            {/* <ProgressBar/> */}
            
          </View>
        </View>
      </View>
    );}
  };
  export default SMainBalanceSection;
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
      flex: 1,
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

  });

  