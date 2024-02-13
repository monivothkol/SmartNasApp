import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import {Circle, Svg} from 'react-native-svg';

const SMainBalanceSection = () => {
    const mainBalance = 10.0;
    const mainExpiry = '29.01.24';
    const statusDescription = "You're good to go! Enjoy using Smart.";
  
    const progressValue = 10; // Change this value as needed
  
    // Calculate the coordinates for the circle
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = `${circumference} ${circumference}`;
    const strokeDashoffset = (circumference * (100 - progressValue)) / 100;
  
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
                stroke="#00e0ff"
                strokeWidth="7"
                fill="transparent"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
              />
            </Svg>
          </View>
        </View>
      </View>
    );
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

  });

  