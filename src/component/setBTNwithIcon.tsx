import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View, StyleSheet, Text, Image,ViewStyle} from 'react-native';

interface SetBtnWiConProps{
  iconName: string;
  btnName: string;
  containerStyle?: ViewStyle;
  onPress?: () => void;
}

const SetBtnWiCon: React.FC<SetBtnWiConProps> = ({
  iconName,
  btnName,
  containerStyle,
  onPress
}) => {
  let icon_path;

  switch(iconName){
      case 'service_icon': icon_path = require('../../Asset/iCon/service_icon.png');break;
      case 'topup_icon': icon_path = require('../../Asset/iCon/topup_icon.png');break;
      case 'home_icon': icon_path = require('../../Asset/iCon/icon_Home.png');break;
      case 'history_icon': icon_path = require('../../Asset/iCon/icon_History.png');break;
      case 'SmartVIP_icon': icon_path = require('../../Asset/iCon/icon_SmartVIP.png');break;
      case 'leng_icon': icon_path = require('../../Asset/iCon/icon_Leng.png');break;
      case 'menu_icon': icon_path = require('../../Asset/iCon/icon_Menu.png');break;
      case 'plan_icon': icon_path = require('../../Asset/iCon/icon_Plan.png');break;
      case 'service_icon': icon_path = require('../../Asset/iCon/icon_Services.png');break;
      case 'smarttune_icon': icon_path = require('../../Asset/iCon/icon_SmartTune.png');break;
      case 'esim_icon': icon_path = require('../../Asset/iCon/icon_eSIM.png');break;
      case 'paymentmethod_icon': icon_path = require('../../Asset/iCon/icon_Payment_methods.png');break;
      case 'securitypin_icon': icon_path = require('../../Asset/iCon/icon_Security_PIN.png');break;
      case 'setting_icon': icon_path = require('../../Asset/iCon/icon_Setting.png');break;
      case 'signout_icon': icon_path = require('../../Asset/iCon/icon_signout.png');break;

    }
  return (
    // <TouchableOpacity style={styleSheet.btnContainer} activeOpacity={1}>
    //use above to stop default interaction button
    <TouchableOpacity style={[styleSheet.btnContainer]} onPress={onPress}>
        <View style={[styleSheet.btnGreenCenter, styleSheet.btnGreen, containerStyle ]}>
          <Image source={icon_path} style={[styleSheet.iconContainer]} />
          <Text style={[styleSheet.textWhite, containerStyle]}>{btnName}</Text>
        </View>

    </TouchableOpacity>
  );
};

export const SetBtnWhiteBG: React.FC<SetBtnWiConProps> = ({
  iconName,
  btnName,
  containerStyle,
  onPress
}) => {
  let icon_path;

  switch(iconName){
    case 'service_icon': icon_path = require('../../Asset/iCon/service_icon.png');break;
    case 'topup_icon': icon_path = require('../../Asset/iCon/topup_icon.png');break;
    case 'home_icon': icon_path = require('../../Asset/iCon/icon_Home.png');break;
    case 'history_icon': icon_path = require('../../Asset/iCon/icon_History.png');break;
    case 'SmartVIP_icon': icon_path = require('../../Asset/iCon/icon_SmartVIP.png');break;
    case 'leng_icon': icon_path = require('../../Asset/iCon/icon_Leng.png');break;
    case 'menu_icon': icon_path = require('../../Asset/iCon/icon_Menu.png');break;
    case 'plan_icon': icon_path = require('../../Asset/iCon/icon_Plan.png');break;
    case 'service_icon': icon_path = require('../../Asset/iCon/icon_Services.png');break;
    case 'smarttune_icon': icon_path = require('../../Asset/iCon/icon_SmartTune.png');break;
    case 'esim_icon': icon_path = require('../../Asset/iCon/icon_eSIM.png');break;
    case 'paymentmethod_icon': icon_path = require('../../Asset/iCon/icon_Payment_methods.png');break;
    case 'securitypin_icon': icon_path = require('../../Asset/iCon/icon_Security_PIN.png');break;
    case 'setting_icon': icon_path = require('../../Asset/iCon/icon_Setting.png');break;
    case 'signout_icon': icon_path = require('../../Asset/iCon/icon_signout.png');break;
  }
  return (
    // <TouchableOpacity style={styleSheet.btnContainer} activeOpacity={1}>
    //use above to stop default interaction button
    <TouchableOpacity style={[styleSheet.btnContainer]} onPress={onPress}>
        <View style={[styleSheet.btnWhiteCenter, styleSheet.btnWhite, containerStyle ]}>
          <Image source={icon_path} style={[styleSheet.iconContainer]} />
          <Text style={[styleSheet.textGreen, containerStyle]}>{btnName}</Text>
        </View>

    </TouchableOpacity>
  );
};



const styleSheet = StyleSheet.create({
    btnContainer:{
        flex: 1,
        marginRight: 10,
    },
  iconContainer: {
    resizeMode: 'contain',
    marginRight: 10
  },
  btnGreenCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnWhiteCenter:{
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingLeft: '5%'
  },
  homepageBtn: {
    flexDirection: 'row',
  },
  btnGreen: {
    backgroundColor: 'green',
    flex: 1,
    height: 50,
    justifyContent: 'center',

    borderRadius: 8,
  },
  btnWhite:{
    backgroundColor: 'white',
    flex: 1,
    height: 50,
    alignItems: 'center'
  },
  textWhite: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  textGreen: {
    textAlign: 'center',
    color: 'green',
    fontSize: 20,
  },
});

export default SetBtnWiCon;
