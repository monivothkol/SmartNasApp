import axios from 'axios';
import {
  GET_USER_PROFILE,
  IS_LOADING,
  GET_USER_RESOURCE,
  LOADING_RESOURCE,
} from './types';
import {Dispatch} from 'redux';
import {State} from 'react-native-gesture-handler';
import {phonenumberInput} from '../component/login_component';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import auth from '@react-native-firebase/auth';
const NowUser = auth().currentUser?.phoneNumber?.replace(/^\+855/, '');
export const getUsersProfile = () => {
  return async (dispatch: Dispatch) => {
    try {
      const {data} = await axios.get(
        `https://vothsmartdb.onrender.com/smartnas_db/user_profile/${NowUser}`,
        // `https://vothsmartdb.onrender.com/smartnas_db/user_profile/98909004`
      );
      if (!data.ok) {
        dispatch({type: IS_LOADING, payload: false});
      }
      dispatch({type: GET_USER_PROFILE, payload: data});
      dispatch({type: IS_LOADING, payload: true});
    } catch (error) {
      console.log(`error user profile api ${error}`);
      dispatch({type: IS_LOADING, payload: false});
    }
  };
};

export const getUserResource = () => {
  return async (dispatch: Dispatch) => {
    try {
      const {data} = await axios.get(
        `https://vothsmartdb.onrender.com/smartnas_db/user_resource/${NowUser}`,
      );
        console.log(`check now user ${NowUser}`)
      if (!data.ok) {
        dispatch({type: LOADING_RESOURCE, payload: false});
      }
      dispatch({type: GET_USER_RESOURCE, payload: data});
      dispatch({type: LOADING_RESOURCE, payload: true});
      console.log(`fetche api data ${data}`)
    } catch (error) {
      console.log(`error user resource api ${error}`);
      dispatch({type: LOADING_RESOURCE, payload: false});
    }
  };
};
const phoneNumber = NowUser;
export const updateMainBalance = (newMainBalance: number) => {
  return async (dispatch: Dispatch) => {
    try {
      // Assuming NowUser contains the user's phone number

      const response = await axios.put(
        `https://vothsmartdb.onrender.com/smartnas_db/user_resource/topupBalance`,
        {phonenumber: phoneNumber, mainbalance: newMainBalance},
      );
      // Check response status and dispatch appropriate actions
      if (response.status === 200) {
        // If update successful, dispatch action to reload user resource data
        dispatch(getUserResource());
      } else {
        // Handle other response statuses if needed
        console.log(`Error updating mainbalance: ${response.statusText}`);
      }
    } catch (error) {
      // Handle error if API request fails
      console.log(`Error updating mainbalance: ${error}`);
    }
  };
};

export const updateValidity = (newValidity: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.put(
        `https://vothsmartdb.onrender.com/smartnas_db/user_resource/increaseValidity`,
        {phonenumber: phoneNumber, mainvalidity: newValidity},
      );
      if (response.status === 200) {
        dispatch(getUserResource());
      } else {
        console.log(`Error updating validity: ${response.statusText}`);
      }
    } catch (error) {
      // Handle error if API request fails
      console.log(`Error updating mainbalance: ${error}`);
    }
  };
};
