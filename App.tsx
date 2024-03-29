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
import Login from './src/screen/login_screen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackNavigationParamList} from './type';
import HomepagePlanSection from './src/component/home_userPlanDetail';
import LoginOTP from './src/screen/login_screen';
import MenuScreen from './src/screen/menu_screen';
import HistoryScreen from './src/screen/history_screen';
import LoginScreen from './src/component/login_component';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import TopUPScreen from './src/screen/top_up';

const Stack = createNativeStackNavigator<HomeStackNavigationParamList>();

const App = () => {
  return (  
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginOTP}
          options={{headerShown: false, animation: 'none'}}
        />
        <Stack.Screen
          name="Home"
          component={HomepageScreen}
          options={{
            headerShown: false,
            animation: 'none',
          }}
        />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            headerShown: false, 
            animation: 'none'}}
        />

        <Stack.Screen
          name="History"
          component={HistoryScreen}
          options={{
            headerShown: false, 
            animation: 'none'}}
        />
        <Stack.Screen 
          name = "TopUp"
          component={TopUPScreen}
          options={{
            headerShown: false, 
            animation: 'none'}}/>
          
      </Stack.Navigator>
    </NavigationContainer>

    </Provider>
  );
};

export default App;
