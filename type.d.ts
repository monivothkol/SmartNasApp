import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type HomeStackNavigationParamList = {
  Home: {number: string};
  Login: undefined;
  Menu: {number: string};
  History: undefined;
  SmartVIP: undefined;
  
};

export type HomeScreenNavigationProps = NativeStackScreenProps<
  HomeStackNavigationParamList,
  'Home',
  'Login',
  'Menu',
  'History',
  'SmartVIP'
>;
