/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import HomepageScreen from './src/screen/homepage_screen';
import Login from './src/screen/login_screen'

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeStackNavigationParamList } from './type';
import HomepagePlanSection from './src/component/home_userPlanDetail';
import LoginOTP from './src/screen/login_screen';
import MenuScreen from './src/screen/menu_screen';
import HistoryScreen from './src/screen/history_screen';
import LoginScreen from './src/component/login_component';

const Stack = createNativeStackNavigator<HomeStackNavigationParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
         name="Login"
         component={LoginOTP}
         options={{headerShown: false}}/>
        <Stack.Screen
          name="Home"
          component={HomepageScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="History"
          component={HistoryScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
