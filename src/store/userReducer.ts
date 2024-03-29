import {
  LOGIN_STATE,
  GET_USER_PROFILE,
  IS_LOADING,
  GET_USER_RESOURCE,
  LOADING_RESOURCE,
  SHOW_OTP_SCREEN
} from './types';

const userResource = {
  phonenumber: '0',
  lasttopup: 'NA',
  expirydate: 'NA',
  mainvalidity: 0,
  mainbalance: 0,
  onnetcall: 0,
  onnetsms: 0,
  data: 0,
};
const initialState = {
  isSignedIn: false,
  userName: 'Super Man',
  loading: false,
  loadingResource: false,
  userProfile: [],
  userResource: userResource,
  
};


type ActionType = {
  type: string;
  payload: any;
};
export default (state = initialState, {type, payload}: ActionType) => {
  switch (type) {
    case GET_USER_PROFILE:
      return {...state, userProfile: payload};
    case IS_LOADING:
      return {...state, loading: payload};
    case LOADING_RESOURCE:
      return {...state, loadingResource: payload};
    case GET_USER_RESOURCE:
      return {...state, userResource: payload};
  }

  return state;
};
