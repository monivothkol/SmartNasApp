import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';


const Header = ({phonenumber, lastname}:{ phonenumber: string, lastname: string }) => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'green'}}>
        <TouchableOpacity style={styleSheet.headerLeft}>
          <View style={{paddingRight: 10}}>
            <Image source={require('../../Asset/iCon/profile_holder.png')} />
          </View>
          <View>
            <Text style={styleSheet.textWhite}>Hello</Text>
            <Text style={[styleSheet.textWhite, {fontSize: 20}]}>{lastname}</Text>
            <Text style={styleSheet.textWhite}>{phonenumber}</Text>
          </View>
        </TouchableOpacity>
  
        <View style={styleSheet.headerRight}>
          <TouchableOpacity>
            <Image
              source={require('../../Asset/iCon/gift.png')}
              style={{width: 40, height: 30}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../Asset/iCon/bell.png')}
              style={{width: 40, height: 30}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  export default Header;

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
    
  });
